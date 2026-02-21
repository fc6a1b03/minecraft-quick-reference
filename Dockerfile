FROM oven/bun AS builder
WORKDIR /app
COPY . .
RUN bun run update && bun run build

################################

FROM caddy:alpine
WORKDIR /usr/share/caddy
COPY --from=builder /app/dist .
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80