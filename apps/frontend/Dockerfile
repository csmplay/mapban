# SPDX-FileCopyrightText: 2025 CyberSport Masters <git@csmpro.ru>
# SPDX-License-Identifier: AGPL-3.0-only

FROM oven/bun:alpine@sha256:7156fcc0cee0194d390bfaf7f0eeda9a5e383e70cc90f31aad3a2440a033d7dc AS base
RUN apk add --no-cache libc6-compat

FROM base AS deps
WORKDIR /app
COPY bun.lock ./bun.lock
COPY apps/frontend/package.json ./package.json
RUN bun install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
ENV PATH=/app/node_modules/.bin:$PATH
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app/apps/frontend
RUN bun run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/frontend/.next/standalone ./

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["bun", "/app/apps/frontend/server.js"]

LABEL org.opencontainers.image.source="https://git.csmpro.ru/csmpro/mapban"
LABEL org.opencontainers.image.url="https://git.csmpro.ru/csmpro/mapban"
LABEL org.opencontainers.image.authors="CyberSport Masters"
LABEL org.opencontainers.image.title="CSM Mapban Frontend"
LABEL org.opencontainers.image.description="Modern map veto and pick tool for tournaments."
LABEL org.opencontainers.image.licenses="AGPL-3.0-only AND CC-BY-SA-4.0 AND OFL-1.1 AND MIT"