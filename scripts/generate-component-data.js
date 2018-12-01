const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const parse = require('react-docgen').parse;
const chokidar = require('chokidar');

/** Major project paths. */
const paths = {
  examples: path.join(__dirname, '../src', 'examples'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../src', 'docs', 'component-data.js'),
};
const enableWatchMode = process.argv.slice(2)[0] === '--watch';

if (enableWatchMode) {
  // Regenerates component metadata when components or examples change.
  chokidar
    .watch([paths.examples, paths.components])
    .on('change', (event, path) => generate(paths));
} else {
  generate(paths);
}

/** Generate component metadata */
function generate(paths) {
  const errors = [];
  const componentData = getDirectories(paths.components).map(
    (componentName) => {
      let data;

      try {
        data = getComponentData(paths, componentName);
      } catch (error) {
        errors.push(
          `An error occurred while attempting to generate metadata for ${componentName}. ${error}`,
        );
      }

      return data;
    },
  );

  writeFile(
    paths.output,
    `module.exports = ${JSON.stringify(
      errors.length ? errors : componentData,
    )};\n`,
  );
}

/** Reads the component source and return its metadata. */
function getComponentData(paths, componentName) {
  const content = readFile(
    path.join(paths.components, componentName, `${componentName}.jsx`),
  );
  const info = parse(content);

  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(paths.examples, componentName),
  };
}

/** Reads a component's example source and return its metadata. */
function getExampleData(examplesPath, componentName) {
  const examples = getExampleFiles(examplesPath, componentName);

  return examples.map((file) => {
    const filePath = path.join(examplesPath, componentName, file);
    const content = readFile(filePath);
    const info = parse(content);

    return {
      // By convention component name should match the filename
      name: file.slice(0, -4),
      description: info.description,
      code: content,
    };
  });
}

/** Returns a list of examples files. */
function getExampleFiles(examplePath, componentName) {
  let exampleFiles = [];

  try {
    exampleFiles = getFiles(path.join(examplePath, componentName));
  } catch (error) {
    console.log(chalk.red(`No examples found for ${componentName}`));
  }

  return exampleFiles;
}

/** Return a list of component directory names. */
function getDirectories(filePath) {
  return fs
    .readdirSync(filePath)
    .filter((file) => fs.statSync(path.join(filePath, file)).isDirectory());
}

/** Returns a list of file names. */
function getFiles(filePath) {
  return fs
    .readdirSync(filePath)
    .filter((file) => fs.statSync(path.join(filePath, file)).isFile());
}

/** Writes component data to a file. */
function writeFile(filePath, content) {
  fs.writeFile(filePath, content, (err) =>
    err
      ? console.log(chalk.red(err))
      : console.log(chalk.green('Component data saved.')),
  );
}

/** Returns the content of a file. */
function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}
