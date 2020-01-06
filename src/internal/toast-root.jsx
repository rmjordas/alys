/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

export const ToastRoot = forwardRef((props, ref) => (
  <div
    css={{
      position: 'fixed',
      top: 20,
      right: 20,
      zIndex: 2, // To move above Sorybook UI elements

      '&:empty': {
        display: 'none',
      },
    }}
    {...props}
    id="toast-root"
    ref={ref}
  />
));

ToastRoot.displayName = 'ToastRoot';
