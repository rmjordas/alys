const path = require('path');
const fse = require('fs-extra');

const PACKAGE_NAME = 'alys';
const files = ['README.md', 'LICENSE', 'NOTICE'];

Promise.all(files.map((file) => copyFile(file))).then(() =>
  createPackageFile(),
);

function copyFile(file) {
  const libPath = resolveBuildPath(file);

  return new Promise((resolve, reject) => {
    fse.copy(file, libPath, (err) => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  })
    .then(() => console.log(`Copied ${file} to ${libPath}`))
    .catch((err) => console.error(`Error copying ${file}: ${err}`));
}

function resolveBuildPath(file) {
  return path.resolve(__dirname, '../lib', path.basename(file));
}

function createPackageFile() {
  return new Promise((resolve, reject) => {
    fse.readFile(
      path.resolve(__dirname, '../package.json'),
      'utf8',
      (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      },
    );
  })
    .then((data) => JSON.parse(data))
    .then((packageData) => {
      const {
        author,
        version,
        description,
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies,
      } = packageData;
      const minimalPackage = {
        name: PACKAGE_NAME,
        author,
        version,
        description,
        main: './index.js',
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies,
      };

      return new Promise((resolve) => {
        const libPath = path.resolve(__dirname, '../lib/package.json');
        const data = JSON.stringify(minimalPackage, null, 2);

        fse.writeFile(libPath, data, (err) => {
          if (err) {
            throw err;
          }

          console.log(`Created package.json in ${libPath}`);
          resolve();
        });
      });
    })
    .catch((err) => console.error(`Error creating package file: ${err}`));
}
