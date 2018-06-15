import * as components from '../../src/components';

export default ({ Vue }) => {
  Object.values(components).forEach((v) => Vue.component(v.name, v));
};
