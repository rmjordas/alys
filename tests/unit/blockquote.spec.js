import { shallowMount } from '@vue/test-utils';

import Blockquote from '@/components/blockquote/blockquote.vue';

test('renders component', () => {
  const quote = 'The quick brown fox jumps over the lazy dog.';
  const wrapper = shallowMount(Blockquote, {
    slots: {
      default: `<span>${quote}</span>`,
    },
  });

  expect(wrapper).toMatchSnapshot();
});
