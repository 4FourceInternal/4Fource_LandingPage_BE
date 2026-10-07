# Docker deploy (server)

Mirrors **[DevDNA](https://github.com/freezeyy/DevDNA)** `compose.yml` on the Pi:

- `mysql:8` + `platform: linux/arm64`
- `security_opt: seccomp:unconfined` on **mysql, backend, frontend**
- Healthcheck: `mysqladmin ping -h localhost` (no password in the check)

Images from GitHub Actions:

| Service  | Image |
|----------|--------|
| Backend  | `ghcr.io/4fourceinternal/4fource-be:latest` |
| Frontend | `ghcr.io/4fourceinternal/4fource-fe:latest` |

## First-time setup (Pi)

```bash
git clone https://github.com/4FourceInternal/4Fource_LandingPage_BE.git
cd 4Fource_LandingPage_BE/deploy

cp .env.example .env
nano .env

echo YOUR_GITHUB_PAT | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin

docker compose pull
docker compose up -d
```

## If MySQL was broken (exit 159 / unhealthy)

Use a **fresh volume** once (same as fixing a bad first init):

```bash
docker compose down
docker volume rm deploy_fource-db-data
docker compose up -d
```

## Import production data

```bash
docker compose stop backend
docker exec -i fource-mysql mysql -u root -p"$MYSQL_ROOT_PASSWORD" "$MYSQL_DATABASE" < ~/strapi-prod.sql
docker cp ~/4Fource/4Fource_LandingPage_BE/public/uploads/. fource-backend:/app/public/uploads/
docker compose start backend
```

## Updates

```bash
git pull
docker compose pull
docker compose up -d
```

- Site: port **8080** (point cloudflared/nginx here, like DevDNA)
- Strapi admin: port **1337** or `PUBLIC_URL/admin`
