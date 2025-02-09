FROM node:lts-alpine as builder
WORKDIR /usr/src
COPY . .
RUN npm i && npm run update && npm run build

FROM caddy:alpine
WORKDIR /usr/share/caddy
COPY --from=builder /usr/src/dist .
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80