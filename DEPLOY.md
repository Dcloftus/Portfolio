# Hosting on the home server

Stack (`docker-compose.yml`): Postgres, Django (gunicorn), React (nginx, also serves `/media/`), and a
Cloudflare Tunnel that publishes it all over HTTPS with no open router ports.

## 1. Move DNS to Cloudflare (one time)

1. Create a free Cloudflare account and **Add a site**: `danielloftus.dev`, Free plan. Cloudflare imports the
   existing records; keep any MX/TXT (email) records and **delete the `A` records pointing at `18.224.10.91`**.
2. In Squarespace: **Domains → danielloftus.dev → DNS → Nameservers → Use custom nameservers**, enter the two
   Cloudflare nameservers. Wait for Cloudflare to show the site as Active.
3. Cloudflare **Zero Trust → Networks → Tunnels → Create a tunnel** (Cloudflared), name it `portfolio`, copy the
   token. Add public hostnames:

   | Hostname               | Service               |
   |------------------------|-----------------------|
   | `danielloftus.dev`     | `http://frontend:80`  |
   | `www.danielloftus.dev` | `http://frontend:80`  |
   | `api.danielloftus.dev` | `http://backend:8000` |

## 2. Set up the server (one time)

On the Proxmox VM/LXC that runs Docker:

```sh
sudo mkdir -p /srv/portfolio && sudo chown "$USER" /srv/portfolio
git clone https://github.com/Dcloftus/Portfolio.git /srv/portfolio/app
cd /srv/portfolio/app
cp .env.example .env    # fill in SECRET_KEY, DB_PASSWORD, CLOUDFLARE_TUNNEL_TOKEN
```

Copy the media from your Mac (the old S3 contents):

```sh
rsync -av --exclude .DS_Store "Potfolio S3 Local/" <user>@<server>:/srv/portfolio/media/
```

Start it:

```sh
docker compose --profile public up -d --build
docker compose exec backend python manage.py createsuperuser
```

Without `--profile public` the tunnel stays off and the site is only on the LAN
(`http://<server>:8080`, API on `:8001`).

## 3. Automate deploys and backups

```sh
crontab -e
*/5 * * * * /srv/portfolio/app/scripts/deploy.sh >> /srv/portfolio/deploy.log 2>&1
0 3 * * * /srv/portfolio/app/scripts/backup-db.sh >> /srv/portfolio/backup.log 2>&1
```

`deploy.sh` rebuilds whenever `main` on GitHub has new commits. Backups land in `/srv/portfolio/backups`.
Copy them somewhere off the box too (Proxmox backup job, NAS, etc.).

Restore a backup:

```sh
gunzip -c /srv/portfolio/backups/portfolio-YYYY-MM-DD.sql.gz | docker compose exec -T db sh -c 'psql -U "$POSTGRES_USER" "$POSTGRES_DB"'
```

## Adding content

- Text: `https://api.danielloftus.dev/admin/` (projects, text sections, resume, skills, contact submissions).
- Images/video: drop files into `/srv/portfolio/media/projects/<Project Name>/{logo,cover,spotlight,overflow,video}/`.
  They show up immediately, no restart needed. Folder names match the project's name in admin, ignoring spaces
  and case (`Etsy Listing Helper` ↔ `EtsyListingHelper`).
- Resume: replace the PDF in `/srv/portfolio/media/resume/`.

Never run `docker compose down -v`; it deletes the database volume.
