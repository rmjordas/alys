const apply = require('postcss-apply');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const colorFunction = require('postcss-color-function');
const cssnano = require('cssnano');
const customMedia = require('postcss-custom-media');
const customProperties = require('postcss-custom-properties');
const customSelectors = require('postcss-custom-selectors');
const fontFamilySystemUi = require('postcss-font-family-system-ui');
const initial = require('postcss-initial');
const mediaMinmax = require('postcss-media-minmax');
const nesting = require('postcss-nesting');
const reporter = require('postcss-reporter');
const stylelint = require('stylelint');
const url = require('postcss-url');

module.exports = {
  map: { inline: false },
  plugins: [
    atImport({
      plugins: [
        stylelint,
      ],
    }),
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
