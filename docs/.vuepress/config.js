module.exports = {
  title: 'Alys',
  description: 'A tiny Vue.js component library',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#fff' }],
  ],
  serviceWorker: true,
  base: '/',
  themeConfig: {
    repo: 'rmjordas/alys',
    editLinks: true,
    lastUpdated: 'Last Updated',
    nav: [],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: ['/introduction/getting-started'],
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/button',
          '/components/blockquote',
          '/components/checkbox',
          '/components/figure',
          '/components/hr',
          '/components/input',
        ],
      },
    ],
  },
};
