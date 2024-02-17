const path = require('path');

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@stylexjs/babel-plugin',
      {
        dev: process.env.NODE_ENV === 'development',
        runtimeInjection: process.env.NODE_ENV === 'development' ? true : false,
        genConditionalClasses: true,
        treeshakeCompensation: true,
        aliases: {
          '@/*': [path.join(__dirname, './src/*')],
        },
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: __dirname,
        },
      },
    ],
  ],
};
