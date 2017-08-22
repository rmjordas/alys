const atImport = require('postcss-import');
const apply = require('postcss-apply');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const customProperties = require('postcss-custom-properties');
const customMedia = require('postcss-custom-media');
const fontFamilySystemUi = require('postcss-font-family-system-ui');
const mediaMinmax = require('postcss-media-minmax');
const nesting = require('postcss-nesting');
const reporter = require('postcss-reporter');
const url = require('postcss-url');

module.exports = {
  map: false,
  plugins: [
    atImport,
    url,
    autoprefixer({
      remove: false,
      grid: true,
    }),
    customProperties,
    apply,
    customMedia,
    mediaMinmax,
    nesting,
    fontFamilySystemUi,
    cssnano({
      discardComments: {
        removeAll: true,
      },
    }),
    reporter,
  ],
};
