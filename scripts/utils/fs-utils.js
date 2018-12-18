const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = class FsUtil {
  /** Return a list of component directory names. */
  static getDirectories(filePath, { excludedDirs = [] }) {
    return fs
      .readdirSync(filePath)
      .filter(
        (file) =>
          fs.statSync(path.join(filePath, file)).isDirectory() &&
          !excludedDirs.includes(file),
      );
  }

  /** Returns a list of file names. */
  static getFiles(filePath) {
    return fs
      .readdirSync(filePath)
      .filter((file) => fs.statSync(path.join(filePath, file)).isFile());
  }

  /** Writes component data to a file. */
  static writeFile(
    filePath,
    content,
    message = {
      onError: 'Error writing file',
      onSuccess: 'File saved',
    },
  ) {
    fs.writeFile(filePath, content, (error) =>
      error
        ? console.log(chalk.red(`${message.onError} ${error.message}`))
        : console.log(chalk.green(message.onSuccess)),
    );
  }

  /** Returns the content of a file. */
  static readFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
  }
};
