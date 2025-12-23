# SPDX-FileCopyrightText: 2025 CyberSport Masters <git@csmpro.ru>
# SPDX-License-Identifier: AGPL-3.0-only

FROM oven/bun:alpine@sha256:7156fcc0cee0194d390bfaf7f0eeda9a5e383e70cc90f31aad3a2440a033d7dc AS base
RUN apk add --no-cache libc6-compat

FROM base AS deps
WORKDIR /app
COPY bun.lock ./bun.lock
COPY apps/backend/package.json ./package.json
RUN bun install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
ENV PATH=/app/node_modules/.bin:$PATH
COPY apps/backend/package.json ./apps/backend/package.json
COPY apps/backend/tsconfig.json ./apps/backend/tsconfig.json
COPY apps/backend/src ./apps/backend/src
WORKDIR /app/apps/backend
RUN bun run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/apps/backend/dist ./apps/backend/dist
COPY apps/backend/package.json ./apps/backend/package.json
WORKDIR /app/apps/backend
CMD ["bun", "dist/index.js"]

LABEL org.opencontainers.image.source="https://git.csmpro.ru/csmpro/mapban"
LABEL org.opencontainers.image.url="https://git.csmpro.ru/csmpro/mapban"
LABEL org.opencontainers.image.authors="CyberSport Masters"
LABEL org.opencontainers.image.title="CSM Mapban Backend"
LABEL org.opencontainers.image.description="Modern map veto and pick tool for tournaments."
LABEL org.opencontainers.image.licenses="AGPL-3.0-only AND CC-BY-SA-4.0 AND OFL-1.1 AND MIT"