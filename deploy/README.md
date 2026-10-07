# Docker deploy (server)

Uses images built by GitHub Actions on push to `main`:

| Service  | Image |
|----------|--------|
| Backend  | `ghcr.io/4fourceinternal/4fource-be:latest` |
| Frontend | `ghcr.io/freezeyy/4fource-fe:latest` |

## First-time server setup

```bash
# 1. Clone backend repo (deploy files live here)
git clone https://github.com/4FourceInternal/4Fource_LandingPage_BE.git
cd 4Fource_LandingPage_BE/deploy

# 2. Env file
cp .env.example .env
nano .env   # set passwords + copy APP_KEYS etc. from old Strapi .env

# 3. Log in to GHCR (PAT with read:packages)
echo YOUR_GITHUB_PAT | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin

# 4. Pull and start
docker compose pull
docker compose up -d

# 5. Migrate existing data (one-time): import SQL + copy public/uploads into volume
# See main project docs or ask team for mysqldump procedure.
```

## Updates (after git push to main and Actions finish)

```bash
cd ~/4Fource/4Fource_LandingPage_BE/deploy   # or your path
git pull
docker compose pull
docker compose up -d
```

## URLs

- Website (container): `http://SERVER_IP:8080` — point nginx/cloudflared here
- Strapi admin: `http://SERVER_IP:1337/admin` or your `PUBLIC_URL/admin`

Frontend nginx proxies `/api` and `/uploads` to the `backend` service on the Docker network.
