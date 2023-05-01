# Library workflow

## Overview
   - We have 2 build types because we may need to support also old versions that are not compatible with ES Modules:
     1. `build:ems`
     2. `build:cjs`

   - `npmrc` to define the registry where the package will be published
   - `package.json` to define the package name, version, dependencies, scripts, etc.
   - `tsconfig.json` to define the typescript configuration
   - `yarnrc.yml` to define the yarn configuration
   - `prettierrc` to define the prettier configuration
   - `eslintrc.js` to define the eslint configuration, plugins, rules etc
   - `babelrc` to convert ECMA Script 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments
   - `.lintstagedrc` to define the pre-commit hooks
   - `.storybook` the storybook configuration and build
   - `src` folder where the components are
   - `tests` are created using jest with enzyme

## Storybook Configuration
   ### Storybook helps us to display, test and play around with our components

   - `main.js` is the main configuration file for storybook
   - `preview.js` is the file where we can add global decorators, global parameters, global argTypes, etc.
   - `theme.js` is the file where we can add the theme for storybook

## src folder
   ### The src folder contains the components and the stories
   ### [Thi workflow is the Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

   - `components` folder where the components are
   - `index.ts` file where we export the components, themes and other stuff that can be imported in other projects
   - `themes` folder where we can add the themes for the components. We have defined fonts, colors, common stuff and 2 theme types:
     - `dark` theme
     - `light` theme
   - `utilities` folder where we can add the utilities for the components. We have defined the breakpoints and the media queries

## Components
   - Each component has its own folder
   - Each component has its own `index.tsx` file where we define the component and its props
   - Each component has its own `stories.tsx` (if we decided to display it in the storybook) file where we define the stories for the component
   - Each component should have a test file (if possible)

## package.json
   - One important key is the `peerDependencies`, where we define the dependencies that the user of the library should have installed in his project

### Tests 
   - Always begin with shallow 
   - If componentDidMount or componentDidUpdate should be tested, use mount 
   - If you want to test component lifecycle and children behavior, use mount 
   - If you want to test children rendering with less overhead than mount and you are not interested in lifecycle methods, use render

## Versioning
   - We use [Semantic Versioning](https://semver.org/) for versioning
   - Let's say we add a new component. That should increase the Minor version by one
   - Fixing a bug or a small change should increase the Patch version by one
   - If we change the component API, that should increase the Major version by one