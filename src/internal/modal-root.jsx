/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { forwardRef } from 'react';

export const ModalRoot = forwardRef((props, ref) => {
  const theme = useTheme().default;

  return (
    <div
      css={{
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.color.baseInvert,
        fontFamily: theme.typography.fonts.base,

        '&:empty': {
          display: 'none',
        },
      }}
      {...props}
      id="modal-root"
      ref={ref}
    />
  );
});

ModalRoot.displayName = 'ModalRoot';
