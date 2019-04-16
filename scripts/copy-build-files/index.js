const createPackageFile = require('./create-package-file');
const copyFile = require('./copy-file');

const packageName = 'alys';
const files = ['README.md', 'LICENSE', 'NOTICE', 'CHANGELOG.md'];

createPackageFile({ packageName });

Promise.all(
  files.map(async (file) => {
    await copyFile(file);
  }),
);
