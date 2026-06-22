# syntax=docker/dockerfile:1

FROM node:24-bookworm-slim AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./
COPY artifacts/iafe-imobi ./artifacts/iafe-imobi
COPY lib/api-client-react ./lib/api-client-react
COPY attached_assets ./attached_assets

ENV CI=true
ENV NODE_ENV=production
ENV BASE_PATH=/

RUN pnpm install --frozen-lockfile --filter @workspace/iafe-imobi...
RUN pnpm --filter @workspace/iafe-imobi run build

FROM nginx:1.27-alpine AS runner

RUN apk add --no-cache curl

COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

COPY --from=builder /app/artifacts/iafe-imobi/dist/public /usr/share/nginx/html

ENV PORT=80

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD sh -c 'curl -fsS "http://127.0.0.1:${PORT:-80}/health" >/dev/null || exit 1'

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
