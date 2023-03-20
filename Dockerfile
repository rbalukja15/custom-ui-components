# install stage
FROM node:16.14.2 AS builder

# Add a work directory
WORKDIR /usr/src/app

# Cache and Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy app files
COPY . .

# Build the app
RUN yarn build-storybook

# Bundle static assets with nginx
FROM nginx:stable-alpine

# Copy built assets from builder
COPY --from=builder /usr/src/app/storybook-static /usr/share/nginx/html
