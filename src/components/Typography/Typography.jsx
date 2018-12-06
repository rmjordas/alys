import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { fontSizes, lineHeights, COLOR_PRIMARY, COLOR_DARK } from '@/constants';

const pStyles = css`
  color: ${COLOR_DARK};
  font-weight: 400;
`;

const builder = (variant) => styled(variant)`
  color: ${COLOR_PRIMARY};
  margin: 0 0
    ${({ gutterBottom }) =>
      gutterBottom ? `${lineHeights[variant] * 12}px` : 0};
  font-weight: 500;
  font-size: ${fontSizes[variant]}px;
  line-height: ${lineHeights[variant]};
  ${variant === 'p' && pStyles}
`;

/** Styled text using pre-set type scales and sizes */
export default function Typography({ variant, children, gutterBottom }) {
  const Component = builder(variant);

  return <Component gutterBottom={gutterBottom}>{children}</Component>;
}

Typography.defaultProps = {
  variant: 'p',
  gutterBottom: false,
};

Typography.propTypes = {
  /** Text to display */
  children: PropTypes.string.isRequired,

  /** Determines the styles of the text */
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),

  /** Add a margin at the bottom */
  gutterBottom: PropTypes.bool,
};
