module.exports = {
  pages: {
    index: {
      entry: './src/index.js',
    },
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
};
