import React from 'react';
import styled from 'styled-components';

import { COLOR_WHITE_BLUE } from '@/constants';

const Indicator = styled.div`
  background-color: ${COLOR_WHITE_BLUE};
  border-radius: 0.375em;
  bottom: 0.5625em;
  height: 0.3125em;
  position: absolute;
  width: 8.375em;
`;

/** Not sure what this does but it appears on <BottomBar /> */
export function BottomBarIndicator(props) {
  return <Indicator {...props} />;
}
