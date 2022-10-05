ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine AS builder
RUN apk update
WORKDIR /app

RUN yarn global add turbo
COPY package.json ./package.json
COPY ./packages/eslint-config-custom/package.json ./packages/eslint-config-custom/package.json
COPY ./packages/tsconfig/package.json ./packages/tsconfig/package.json
COPY ./packages/ui/package.json ./packages/ui/package.json
COPY yarn.lock ./yarn.lock
COPY turbo.json ./turbo.json
COPY ./apps/web/package.json ./apps/web/package.json
RUN turbo prune --scope=web --docker

FROM node:${NODE_VERSION}-alpine AS installer
RUN apk update
WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
COPY ./node_modules ./node_modules

RUN yarn install --network-timeout 6000000

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
COPY ./apps/web ./apps/web
COPY ./packages ./packages
RUN yarn turbo run build --filter=web...

FROM node:${NODE_VERSION}-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/web/next.config.js .
COPY --from=installer /app/apps/web/package.json .

COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
RUN rm -rf ./apps/web/.env
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static

EXPOSE 3000

ENV PORT 3000

ENTRYPOINT [ "node","apps/web/server.js" ]
