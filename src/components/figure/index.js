import Figure from './figure.vue';

Figure.install = (Vue) => {
  Vue.component(Figure.name, Figure);
};

export default Figure;
