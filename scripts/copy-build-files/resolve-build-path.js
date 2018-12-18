const path = require('path');

module.exports = function resolveBuildPath(file) {
  return path.resolve(__dirname, '../../lib', path.basename(file));
};
