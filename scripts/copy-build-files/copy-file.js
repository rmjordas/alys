const fse = require('fs-extra');
const chalk = require('chalk');

const resolveBuildPath = require('./resolve-build-path');

module.exports = async function copyFile(file) {
  const libPath = resolveBuildPath(file);

  try {
    await fse.copy(file, libPath);
  } catch (error) {
    return console.log(
      chalk.red(`Error copying ${chalk.bold(file)}: ${error.message}`),
    );
  }

  console.log(chalk.green(`Copied ${chalk.bold(file)} to ${libPath}`));
};
