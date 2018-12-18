const path = require('path');

/** Major project paths. */
module.exports = {
  rootPackageManifest: path.resolve(__dirname, '../package.json'),
  lib: path.resolve(__dirname, '../lib'),
  libPackageManifest: path.resolve(__dirname, '../lib', 'package.json'),
  examples: path.join(__dirname, '../src', 'examples'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../src', 'docs', 'component-data.js'),
};
