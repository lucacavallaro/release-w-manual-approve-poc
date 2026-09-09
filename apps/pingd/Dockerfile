FROM node:24-slim
COPY --from=root pnpm-workspace.yaml pnpm-lock.yaml ./
COPY package.json index.cjs ./apps/pingd/
RUN corepack enable && pnpm --filter pingd ci
EXPOSE 3000/tcp
ENTRYPOINT ["node", "apps/pingd/index.cjs"]
