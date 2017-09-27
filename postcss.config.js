const atImport = require('postcss-import');
const apply = require('postcss-apply');
const autoprefixer = require('autoprefixer');
const colorFunction = require('postcss-color-function');
const cssnano = require('cssnano');
const customProperties = require('postcss-custom-properties');
const customMedia = require('postcss-custom-media');
const fontFamilySystemUi = require('postcss-font-family-system-ui');
const initial = require('postcss-initial');
const mediaMinmax = require('postcss-media-minmax');
const nesting = require('postcss-nesting');
const customSelectors = require('postcss-custom-selectors');
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
    colorFunction,
    initial,
    customSelectors,
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
