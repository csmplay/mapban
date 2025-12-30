# SPDX-FileCopyrightText: 2025 CyberSport Masters <git@csmpro.ru>
# SPDX-License-Identifier: AGPL-3.0-only

FROM node:24-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

FROM base AS builder
COPY package.json yarn.lock .yarnrc.yml ./
COPY apps/backend ./apps/backend
RUN corepack yarn workspaces focus backend && \
    corepack yarn workspace backend build

FROM base AS runner
ENV NODE_ENV=production
COPY package.json yarn.lock .yarnrc.yml ./
COPY apps/backend/package.json ./apps/backend/package.json
RUN corepack yarn workspaces focus backend --production
COPY --from=builder /app/apps/backend/dist ./apps/backend/dist
WORKDIR /app/apps/backend
CMD ["node", "dist/index.js"]

LABEL org.opencontainers.image.source="https://git.csmpro.ru/csmpro/mapban"
LABEL org.opencontainers.image.url="https://git.csmpro.ru/csmpro/mapban"
LABEL org.opencontainers.image.authors="CyberSport Masters"
LABEL org.opencontainers.image.title="CSM Mapban Backend"
LABEL org.opencontainers.image.description="Modern map veto and pick tool for tournaments."
LABEL org.opencontainers.image.licenses="AGPL-3.0-only AND CC-BY-SA-4.0 AND OFL-1.1 AND MIT"