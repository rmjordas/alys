const path = require('path');
const parse = require('react-docgen').parse;

const getExampleFiles = require('./get-example-files');
const FsUtil = require('../utils/fs-utils');

/** Reads a component's example source and return its metadata. */
module.exports = function getExampleData(examplesPath, componentName) {
  const examples = getExampleFiles(examplesPath, componentName);

  return examples.map((file) => {
    const filePath = path.join(examplesPath, componentName, file);
    const content = FsUtil.readFile(filePath);
    const info = parse(content);

    return {
      // By convention component name should match the filename
      name: file.slice(0, -'.jsx'.length),
      description: info.description,
      code: content,
    };
  });
};
