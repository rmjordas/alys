import { shallowMount } from '@vue/test-utils';

import Input from '@/components/input/input.vue';

test('renders component', () => {
  const value = 'Input test';
  const wrapper = shallowMount(Input, {
    propsData: {
      value,
    },
  });

  expect(wrapper).toMatchSnapshot();
});
