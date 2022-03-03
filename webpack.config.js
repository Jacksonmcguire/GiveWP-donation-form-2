// Default webpack configuration
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

// Add extra configuration, and export it
module.exports = {
  ...defaultConfig,
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      // Add here a new rule
      // ...
    ],
  },
  externals: {
      react_hook_form: 'react-hook-form'
  },
};