/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { forwardRef, useRef, useEffect } from 'react';
import { useTheme } from 'emotion-theming';

import { CloseCircleIcon } from './icons/close-circle-icon';

export const Toast = forwardRef(({ children, onClose = () => undefined, ...alertProps }, ref) => {
  const theme = useTheme().default;
  const closeRef = useRef();

  closeRef.current = onClose;

  useEffect(() => {
    const id = setTimeout(() => closeRef.current(), 5000);

    return () => clearTimeout(id);
  }, []);

  return (
    <div
      css={{
        fontSize: theme.typography.size.s3,
        fontWeight: theme.typography.weight.bold,
        fontFamily: theme.typography.fonts.base,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.8125em',
        borderRadius: 5,
        marginBottom: '1em',
        minWidth: '20em',
        maxWidth: '20em',
        backgroundColor: theme.color.accent,
        color: theme.color.baseInvert,
        boxShadow: '0px 10px 23px rgba(0, 0, 0, 0.12)',
      }}
      {...alertProps}
      ref={ref}
      role="alertdialog"
      aria-labelledby="toast_label"
    >
      <span id="toast_label">{children}</span>
      <CloseCircleIcon
        css={{ '@media (hover: hover)': { '&:hover': { cursor: 'pointer' } } }}
        width={theme.typography.size.m3}
        height={theme.typography.size.m3}
        onClick={onClose}
      />
    </div>
  );
});

Toast.displayName = 'Toast';

Toast.defaultProps = {
  variant: 'primary',
  color: 'primary',
  onClose: undefined,
};

Toast.propTypes = {
  /** Text to display inside the toast */
  children: PropTypes.string.isRequired,
  /** Sets the type of toast */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Determines the colors of the toast */
  color: PropTypes.oneOf(['basic', 'primary', 'danger', 'success', 'warning']),
  /** */
  onClose: PropTypes.func,
};
