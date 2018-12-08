import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { fontSizes, lineHeights } from '@/constants';
import { styleLengths } from '@utils/string-utils';

const pStyles = css`
  font-weight: 400;
`;
const builder = (variant) => styled(variant)`
  color: inherit;
  margin: 0 0
    ${({ gutterBottom }) =>
      gutterBottom ? styleLengths(lineHeights[variant] * 12) : 0};
  font-weight: 500;
  font-size: ${styleLengths(fontSizes[variant])};
  line-height: ${lineHeights[variant]};
  ${variant === 'p' && pStyles}
`;

/** Styled text using pre-set type scales and sizes */
export default function Typography({ variant, children, ...props }) {
  const Component = builder(variant);

  return <Component {...props}>{children}</Component>;
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
