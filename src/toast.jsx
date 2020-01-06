/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core';
import PropTypes from 'prop-types';
import { forwardRef, useRef, useEffect } from 'react';
import { useTheme } from 'emotion-theming';

import { CloseCircleIcon } from './icons/close-circle-icon';

const fadein = keyframes`
  from { bottom: 0; opacity: 0; }
  to { bottom: 30; opacity: 1;}
`;

const fadeout = keyframes`
  from { bottom: 30; opacity: 1; }
  to { bottom: 0; opacity: 0; }
`;

export const Toast = forwardRef(
  ({ color: pColor, children, onClose, variant, ...alertProps }, ref) => {
    const theme = useTheme().default;
    const closeRef = useRef();

    closeRef.current = onClose ? onClose : () => undefined;

    useEffect(() => {
      const id = setTimeout(() => closeRef.current(), 5000);

      return () => clearTimeout(id);
    }, []);

    let themeColor = 'accent';

    switch (pColor) {
      case 'basic':
        themeColor = 'subtle';
        break;
      case 'danger':
        themeColor = 'danger';
        break;
      case 'success':
        themeColor = 'success';
        break;
      case 'warning':
        themeColor = 'warning';
        break;
      case 'primary':
      default:
        themeColor = 'accent';
        break;
    }

    // highlight colors
    const h400 = theme.color[`${themeColor}400`];
    const h500 = theme.color[`${themeColor}`];
    const h600 = theme.color[`${themeColor}600`];

    let backgroundColor = h500;
    let color = h500;
    let borderTop = 'none';

    let hoverStyles = {
      cursor: 'pointer',
    };

    let focusStyles = {};

    let activeStyles = {};

    switch (variant) {
      case 'secondary':
        backgroundColor = theme.color.baseInvert;
        color = theme.color.description;
        borderTop = `3px solid ${h500}`;

        hoverStyles.backgroundColor = h500;
        hoverStyles.color = theme.color.baseInvert;
        hoverStyles.svg = {
          color: variant === 'secondary' ? theme.color.baseInvert : 'currentColor',
        };

        activeStyles.backgroundColor = h600;
        activeStyles.borderTop = `3px solid ${h600}`;
        break;
      case 'primary':
      default:
        backgroundColor = h500;
        color = theme.color.baseInvert;
        borderTop = 'none';

        hoverStyles.backgroundColor = h400;

        activeStyles.backgroundColor = h600;
        break;
    }

    if (pColor === 'basic') {
      backgroundColor = theme.color.baseInvert;
      color = theme.color.description;
      borderTop = '3px solid transparent';

      hoverStyles.backgroundColor = '#efefef';
      hoverStyles.color = theme.color.base;
      hoverStyles.svg = {
        color: theme.color.base,
      };

      activeStyles.backgroundColor = 'lightgrey';
    }

    return (
      <div
        css={{
          backgroundColor,
          color,
          borderTop,
          fontSize: theme.typography.size.s2,
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
          boxShadow: '0px 10px 23px rgba(0, 0, 0, 0.12)',
          transition: `all 0.2s ${theme.easing.rubber}`,
          animation: onClose ? `${fadein} 0.5s, ${fadeout} 0.5s 4.5s` : undefined,

          svg: {
            color:
              variant === 'secondary' || pColor === 'basic'
                ? theme.color.textSubtle
                : 'currentColor',
          },

          '@media (hover: hover)': {
            '&:hover': hoverStyles,
          },

          '&:focus': focusStyles,

          '&:active': activeStyles,
        }}
        {...alertProps}
        ref={ref}
        role="alertdialog"
        aria-labelledby="toast_label"
      >
        <span
          css={{
            maxWidth: '90%',
          }}
          id="toast_label"
        >
          {children}
        </span>
        <CloseCircleIcon
          css={{
            color: variant === 'secondary' ? theme.color.textSubtle : 'currentColor',
            transition: `color 0.2s ${theme.easing.rubber}`,
            alignSelf: 'flex-start',

            '@media (hover: hover)': {
              '&:hover': {
                cursor: 'pointer',
              },
            },
          }}
          width={theme.typography.size.m2}
          height={theme.typography.size.m2}
          onClick={onClose}
        />
      </div>
    );
  },
);

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
  /** If provided, it will allow destroying the toast before it expires */
  onClose: PropTypes.func,
};
