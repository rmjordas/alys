/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const VisuallyHidden = forwardRef(({ children, ...spanProps }, ref) => (
  <span
    css={{
      border: 'none',
      clip: 'rect(0 0 0 0)',
      height: 1,
      width: 1,
      margin: -1,
      padding: 0,
      overflow: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
    }}
    {...spanProps}
    ref={ref}
  >
    {children}
  </span>
));

VisuallyHidden.displayName = 'VisuallyHidden';

VisuallyHidden.propTypes = {
  /** Text that is only visible when inspecting the source */
  children: PropTypes.string.isRequired,
};
