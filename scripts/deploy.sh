#!/bin/sh
# Pull-based deploy: rebuilds the stack when origin/main has new commits.
# Cron (every 5 min):  */5 * * * * /srv/portfolio/app/scripts/deploy.sh >> /srv/portfolio/deploy.log 2>&1
# Run with --force to rebuild without new commits.

# Wrapped in main() so the whole file is read before git can rewrite it mid-run
main() {
    set -eu
    cd "$(dirname "$0")/.."

    git fetch --quiet origin main
    if [ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] && [ "${1:-}" != "--force" ]; then
        exit 0
    fi

    echo "$(date '+%F %T') deploying $(git rev-parse --short origin/main)"
    git merge --ff-only origin/main
    docker compose --profile public up -d --build --remove-orphans
    docker image prune -f
}

main "$@"
