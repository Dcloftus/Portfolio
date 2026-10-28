#!/bin/sh
# Nightly Postgres dump, keeps the newest 14.
# Cron (3am):  0 3 * * * /srv/portfolio/app/scripts/backup-db.sh >> /srv/portfolio/backup.log 2>&1
set -eu
cd "$(dirname "$0")/.."

BACKUP_DIR="${BACKUP_DIR:-/srv/portfolio/backups}"
mkdir -p "$BACKUP_DIR"

docker compose exec -T db sh -c 'pg_dump -U "$POSTGRES_USER" "$POSTGRES_DB"' \
    | gzip > "$BACKUP_DIR/portfolio-$(date +%F).sql.gz"

ls -1t "$BACKUP_DIR"/portfolio-*.sql.gz | tail -n +15 | xargs -r rm --
