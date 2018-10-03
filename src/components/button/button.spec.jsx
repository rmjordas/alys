import React from 'react';
import { shallow } from 'enzyme';

import Button from './button';

test('component renders without error', () => {
  const wrapper = shallow(<Button />);

  expect(wrapper).toMatchSnapshot();
});
