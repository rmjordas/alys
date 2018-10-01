import path from 'path';

const PUBLIC = path.resolve(__dirname, 'public');
const SRC = path.resolve(__dirname, 'src');

export default {
  title: 'Alys',
  description: 'A tiny React component library',
  base: '/',
  src: './src',
  dest: './docs',
  modifyBundlerConfig: (config) => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      '@public': PUBLIC,
      '@fonts': `${PUBLIC}/fonts`,
      '@images': `${PUBLIC}/images`,
      '@components': `${SRC}/theme/components`,
      '@styles': `${SRC}/theme/styles`,
    });

    return config;
  },
  htmlContext: {
    favicon: '/public/logo-icon.png',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Kadwa:400,700|Montserrat:400,400i,700',
        },
        {
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/material.css',
        },
      ],
    },
  },
  themeConfig: {
    codemirrorTheme: 'material',
    // logo: {
    //   src: '/public/logo-icon.png',
    //   width: 232,
    // },
    colors: {
      primary: '#333',
      sidebarBg: '#f3f3f3',
    },
    styles: {
      body: {
        fontFamily: "'Montserrat', Helvetica Neue, Arial, sans",
        fontSize: 16,
      },
      h1: {
        fontFamily: "'Kadwa'",
      },
      h2: {
        fontFamily: "'Kadwa'",
      },
      h3: {
        fontFamily: "'Kadwa'",
      },
      logo: {
        background: 'deeppink',
        alignItems: 'center',
      },
    },
  },
};
