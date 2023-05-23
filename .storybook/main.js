const path = require('path');
module.exports = {
  webpackFinal: async config => {
    config.resolve.alias['custom-ui-components'] = path.join(__dirname, '../');
    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/preset-create-react-app', 'storybook-addon-material-ui'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      allowSyntheticDefaultImports: false,
      // speeds up storybook build time
      esModuleInterop: false,
      // speeds up storybook build time
      shouldExtractLiteralValuesFromEnum: true,
      // makes union prop types like variant and size appear as select controls
      shouldRemoveUndefinedFromOptional: true,
      // makes string and boolean types that can be undefined appear as inputs and switches
      propFilter: prop => prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true
    }
  },
  docs: {
    autodocs: true
  }
};