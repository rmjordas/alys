import { shallowMount } from '@vue/test-utils';

import Checkbox from '@/components/checkbox/checkbox.vue';

test('renders component', () => {
  const wrapper = shallowMount(Checkbox);

  expect(wrapper).toMatchSnapshot();
});
