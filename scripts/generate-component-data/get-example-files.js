const path = require('path');
const chalk = require('chalk');

const FsUtil = require('../utils/fs-utils');

/** Returns a list of examples files. */
module.exports = function getExampleFiles(examplePath, componentName) {
  let exampleFiles = [];

  try {
    exampleFiles = FsUtil.getFiles(path.join(examplePath, componentName));
  } catch (error) {
    console.log(chalk.red(`${componentName}: No examples`));
  }

  return exampleFiles;
};
