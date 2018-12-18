const getComponentData = require('./get-component-data');
const FsUtil = require('../utils/fs-utils');

/** Generate component metadata */
module.exports = function generate(paths, { excludedDirs }) {
  const errors = [];
  const componentData = FsUtil.getDirectories(paths.components, {
    excludedDirs,
  }).map((componentName) => {
    let data;

    try {
      data = getComponentData(paths, componentName);
    } catch (error) {
      errors.push(`${componentName}: Error generating metadata. ${error}`);
    }

    return data;
  });

  FsUtil.writeFile(
    paths.output,
    `module.exports = ${JSON.stringify(
      errors.length ? errors : componentData,
    )};\n`,
    {
      onError: `Error writing component data.`,
      onSuccess: 'Component data saved.',
    },
  );
};
