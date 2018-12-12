import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '@/constants';

const Indicator = styled.div`
  min-height: 0.75em;
  max-height: 0.75em;
  min-width: 0.75em;
  max-width: 0.75em;
  border-radius: 50%;
  background-color: ${({ active, color }) =>
    active
      ? colors[color === 'default' ? 'primaryLight' : color]
      : colors.whiteBlue};
`;

/**
 * Provides a visual representation of the status or state of an interface item.
 */
export default function ActiveIndicator(props) {
  return <Indicator {...props} />;
}

ActiveIndicator.defaultProps = {
  active: false,
  color: 'default',
};

ActiveIndicator.propTypes = {
  /**
   * If set to `true`, indicator will be filled with the color of represented by
   * the value of the `color` prop
   */
  active: PropTypes.bool,

  /** Indicator fill color when value of `active` prop is `true` */
  color: PropTypes.oneOf(['default', 'error']),
};
