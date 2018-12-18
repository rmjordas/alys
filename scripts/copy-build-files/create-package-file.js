const fse = require('fs-extra');
const chalk = require('chalk');

const paths = require('../paths');

module.exports = async function createPackageFile({ packageName }) {
  const fileData = await fse.readFile(paths.rootPackageManifest, 'utf-8');
  const {
    version,
    description,
    keywords,
    homepage,
    bugs,
    license,
    author,
    repository,
    dependencies,
    peerDependencies,
  } = JSON.parse(fileData);
  const data = JSON.stringify(
    {
      name: packageName,
      version,
      description,
      keywords,
      homepage,
      bugs,
      license,
      author,
      main: './index.js',
      repository,
      dependencies,
      peerDependencies,
    },
    null,
    2,
  );

  try {
    await fse.writeFile(paths.libPackageManifest, data);
  } catch (error) {
    return console.log(
      chalk.red(`Error creating package file: ${error.message}`),
    );
  }

  console.log(
    chalk.green(
      `Created ${chalk.bold('package.json')} in ${paths.libPackageManifest}`,
    ),
  );
};
