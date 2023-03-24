# custom-ui-components
A library with custom ui components

# Steps to run the project
1. yarn install
2. yarn run build
3. yarn run storybook

# How do the test work
### We should consider that when we want to test the component and the children, there are 3 method used from enzyme:
1. Always begin with shallow
2. If componentDidMount or componentDidUpdate should be tested, use mount
3. If you want to test component lifecycle and children behavior, use mount
4. If you want to test children rendering with less overhead than mount and you are not interested in lifecycle methods, use render