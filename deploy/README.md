# Docker deploy (server)

Uses images built by GitHub Actions on push to `main`:

| Service  | Image |
|----------|--------|
| Backend  | `ghcr.io/4fourceinternal/4fource-be:latest` |
| Frontend | `ghcr.io/4fourceinternal/4fource-fe:latest` |

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

## Raspberry Pi: `no matching manifest for linux/arm/v8`

Your Pi needs **arm64** images. Check what GHCR published:

```bash
docker buildx imagetools inspect ghcr.io/4fourceinternal/4fource-fe:latest
docker buildx imagetools inspect ghcr.io/4fourceinternal/4fource-be:latest
```

Look for `linux/arm64` in the output.

**Fix A (preferred):** Re-run GitHub Actions after pushing the workflow with `setup-qemu-action` (multi-arch build). Then `docker compose pull` again.

**Fix B (don’t wait on CI — build on the Pi):** Clone both repos under `~/4Fource/`, then:

```bash
cd ~/4Fource/4Fource_LandingPage_BE/deploy
docker compose -f compose.yml -f compose.build.yml up -d --build
```

MySQL still pulls from Docker Hub; only FE/BE build locally. First Strapi build on a Pi can take **45–90 minutes**.

**Which image failed?** Test separately (after `docker login ghcr.io`):

```bash
docker pull ghcr.io/4fourceinternal/4fource-fe:latest
docker pull ghcr.io/4fourceinternal/4fource-be:latest
docker pull mysql:8
```

CI is configured to publish **`linux/arm64` only** (for this Pi). Re-push both repos after workflow changes, then pull again (~10–15 min per image, not 25+ for dual-arch).
