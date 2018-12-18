const path = require('path');
const chalk = require('chalk');
const parse = require('react-docgen').parse;

const getExampleData = require('./get-example-data');
const FsUtil = require('../utils/fs-utils');

/** Reads the component source and return its metadata. */
module.exports = function getComponentData(paths, componentName) {
  const filePath = path.join(
    paths.components,
    componentName,
    `${componentName}.jsx`,
  );
  const content = FsUtil.readFile(filePath);
  const info = parse(content);

  if (!info.description) {
    console.log(chalk.red(`${componentName}: No description`));
  }

  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(paths.examples, componentName),
  };
};
