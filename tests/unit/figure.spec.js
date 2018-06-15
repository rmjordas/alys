import { shallowMount } from '@vue/test-utils';

import Figure from '@/components/figure/figure.vue';

test('renders component', () => {
  const src = 'https://alys.js.org/logo.png';
  const caption = 'Alys logo';
  const wrapper = shallowMount(Figure, {
    propsData: {
      src,
      caption,
    },
  });

  expect(wrapper).toMatchSnapshot();
});
