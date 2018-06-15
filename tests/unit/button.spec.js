import { shallowMount } from '@vue/test-utils';

import Button from '@/components/button/button.vue';

test('renders component', () => {
  const buttonMessage = 'Something';
  const wrapper = shallowMount(Button, {
    slots: {
      default: `<span>${buttonMessage}</span>`,
    },
  });

  expect(wrapper).toMatchSnapshot();
});
