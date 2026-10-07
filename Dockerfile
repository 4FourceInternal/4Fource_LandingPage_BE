FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache vips-dev build-base python3

COPY package*.json ./

RUN npm ci

COPY . .

ENV NODE_ENV=production

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]
