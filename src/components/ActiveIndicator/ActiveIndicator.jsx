import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '@/constants';

const Indicator = styled.div`
  height: 0.75em;
  width: 0.75em;
  border-radius: 50%;
  background-color: ${({ active, color }) =>
    active
      ? colors[color === 'default' ? 'primaryLight' : color]
      : colors.whiteBlue};
`;

/** Provides the status of an item in the interface */
export default function ActiveIndicator(props) {
  return <Indicator {...props} />;
}

ActiveIndicator.defaultProps = {
  active: false,
  color: 'default',
};

ActiveIndicator.propTypes = {
  /** Determines the color of the indicator */
  active: PropTypes.bool,

  /** Color when value of `active` prop is `true` */
  color: PropTypes.oneOf(['default', 'error']),
};
