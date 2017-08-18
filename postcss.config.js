module.exports = {
  map: false,
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-cssnext'),
    require('cssnano'),
    require('postcss-reporter')
  ],
};
