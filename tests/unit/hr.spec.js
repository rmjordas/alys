import { shallowMount } from '@vue/test-utils';

import Hr from '@/components/hr/hr.vue';

test('renders component', () => {
  const wrapper = shallowMount(Hr);

  expect(wrapper).toMatchSnapshot();
});
