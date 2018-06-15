/*! alys v0.2.0 | Apache-2.0 License | https://github.com/rmjordas/alys */
import * as components from './components';

import './assets/scss/globals.scss';

const Alys = {
  install(Vue, options = {}) {
    const cmps = Array.isArray(options.components)
      ? options.components
      : components;

    Object.values(cmps).forEach((v) => Vue.use(v));
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Alys);
}

export default Alys;
