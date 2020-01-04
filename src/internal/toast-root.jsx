/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

const domId = 'toast-root';

export const ToastRoot = forwardRef((props, ref) => (
  <div
    css={{
      position: 'absolute',
      top: 20,
      right: 20,

      '&:empty': {
        display: 'none',
      },
    }}
    {...props}
    id={domId}
    ref={ref}
  />
));

ToastRoot.displayName = 'ToastRoot';
