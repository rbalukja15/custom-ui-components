# install stage
FROM node:16.14.2 AS install

WORKDIR /usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --pure-lockfile

COPY . .

# build stage
FROM install AS build

ENV NODE_ENV=production

RUN yarn build

# staticfiles stage, final
FROM scratch

COPY --from=build /usr/src/app/public /assets
