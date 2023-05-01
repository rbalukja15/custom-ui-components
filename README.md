# custom-ui-components
A library with custom ui components

# Steps to run the project
1. yarn install
2. yarn run build
3. yarn run storybook

## [Here you can check out how the library works](documentation/architecture.md)

## Steps to deploy the library
1. yarn run build
2. make sure you update the `.npmrc` file with the correct registry and token
3. run in the terminal this command `yarn --registry=https://git.foodtracks.de/api/v4/projects/39/packages/npm/ add @foodtracks/custom-ui-components`
4. check the versioning in the `package.json` file and in [project registry](https://git.foodtracks.de/foodtracks/cockpit/-/packages)