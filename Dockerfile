# Use node image as base
FROM node:16.14.2

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Build the application
RUN yarn build

# Expose the Storybook port
EXPOSE 6006

# Start Storybook server
CMD ["yarn", "storybook", "-p", "6006", "-s", "build"]
