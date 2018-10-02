export default {
  title: 'Alys',
  description: 'A tiny React component library',
  base: '/',
  src: './src',
  dest: './docs',
  indexHtml: './index.html',
  htmlContext: {
    favicon: '/favicon.ico',
  },
  themeConfig: {
    codemirrorTheme: 'material',
    logo: {
      src: '/logo-icon.svg',
    },
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
