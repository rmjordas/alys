const chokidar = require('chokidar');

const generate = require('./generate');
const paths = require('../paths');

const enableWatchMode = process.argv.slice(2)[0] === '--watch';
const excludedDirs = ['common', 'utils'];

if (enableWatchMode) {
  // Regenerates component metadata when components or examples change.
  chokidar
    .watch([paths.examples, paths.components])
    .on('change', (_event, path) => generate(paths, { excludedDirs }));
} else {
  generate(paths, { excludedDirs });
}
