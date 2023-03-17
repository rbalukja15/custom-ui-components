# install stage
FROM node:16.14.2 AS install

WORKDIR /usr/src/app

# Set YARN_CACHE_FOLDER environment variable
ENV YARN_CACHE_FOLDER=/usr/src/app/.cache

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --frozen-lockfile --no-cache

COPY . .

# build stage
FROM install AS build

ENV NODE_ENV=production

RUN yarn build

# Expose the Storybook port
EXPOSE 6006

# Start Storybook server
CMD ["yarn", "storybook", "-p", "6006", "-s", "build"]
