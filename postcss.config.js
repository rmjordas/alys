/*!
 *  Copyright 2017-2018 Rodger Jordas
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

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
