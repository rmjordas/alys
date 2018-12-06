module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
      },
    ],
    [
      'react-app',
      {
        helpers: false,
        absoluteRuntime: false,
      },
    ],
  ],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src/components',
          '@common': './src/components/common',
          '@utils': './src/components/utils',
        },
      },
    ],
  ],
};
