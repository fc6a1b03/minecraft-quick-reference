FROM oven/bun:latest as builder
WORKDIR /usr/src
COPY . .
RUN bun i && bun run build

FROM caddy:alpine
WORKDIR /usr/share/caddy
COPY --from=builder /usr/src/dist .
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80