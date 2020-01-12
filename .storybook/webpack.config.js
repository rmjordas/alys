require('dotenv').config();

const webpack = require('webpack');

const { NODE_ENV, STORYBOOK_DEMO_VIDEOS_BASE_URL } = process.env;

module.exports = async ({ config }) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.STORYBOOK_DEMO_VIDEOS_BASE_URL':
        NODE_ENV === 'production' ? JSON.stringify(STORYBOOK_DEMO_VIDEOS_BASE_URL) : '',
    }),
  );

  return config;
};
