/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const Button = forwardRef(
  ({ variant, color: pColor, size, children, ...buttonProps }, ref) => {
    const theme = useTheme().default;

    let fontSize = '0.9375em';
    let padding = '0.875em 2.25em';

    switch (size) {
      case 'small':
        fontSize = '0.8125em';
        padding = children.length > 1 ? '0.625em 0.75em' : '0.625em 1.5em';
        break;
      case 'big':
      default:
        fontSize = '0.9375em';
        padding = children.length > 1 ? '0.625em 1.25em' : '0.625em 1.5em';
        break;
    }

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
    const h200 = theme.color[`${themeColor}200`];
    const h400 = theme.color[`${themeColor}400`];
    const h500 = theme.color[`${themeColor}`];
    const h600 = theme.color[`${themeColor}600`];

    let border = 'none';
    let backgroundColor = h500;
    let color = h500;

    let hoverStyles = {
      cursor: 'pointer',
    };

    let focusStyles = {
      boxShadow: '0 0 0 4px lightskyblue',
    };

    let activeStyles = {
      color: pColor === 'basic' ? theme.color.description : theme.color.baseInvert,
    };

    switch (variant) {
      case 'secondary':
        border = `2px solid ${h500}`;
        backgroundColor = 'transparent';
        color = pColor === 'basic' ? theme.color.description : h500;

        hoverStyles.borderColor = h500;
        hoverStyles.backgroundColor = pColor === 'basic' ? theme.color.subtle : h500;
        hoverStyles.color = pColor === 'basic' ? theme.color.description : theme.color.baseInvert;

        focusStyles.boxShadow = pColor === 'basic' ? `0 0 0 4px lightskyblue` : `0 0 0 4px ${h200}`;

        activeStyles.borderColor = pColor === 'basic' ? theme.color.subtle : h600;
        activeStyles.backgroundColor = pColor === 'basic' ? `lightgrey` : h600;
        break;
      case 'primary':
      default:
        color = pColor === 'basic' ? theme.color.description : theme.color.baseInvert;

        hoverStyles.backgroundColor = pColor === 'basic' ? 'lightgrey' : h400;

        focusStyles.backgroundColor = h500;
        focusStyles.boxShadow = pColor === 'basic' ? `0 0 0 4px lightskyblue` : `0 0 0 4px ${h200}`;

        activeStyles.backgroundColor = pColor === 'basic' ? 'lightgrey' : h600;
        break;
    }

    if (buttonProps.disabled) {
      border = variant === 'secondary' ? `2px solid ${theme.color.subtle}` : 'none';
      backgroundColor = variant === 'secondary' ? 'transparent' : theme.color.subtle;
      color = theme.color.textSubtle;
      hoverStyles = undefined;
      focusStyles = undefined;
      activeStyles = undefined;
    }

    return (
      <button
        css={{
          fontSize,
          padding,
          backgroundColor,
          border,
          color,
          outline: 'none',
          userSelect: 'none',
          borderRadius: '0.3125em',
          fontFamily: theme.typography.fonts.base,
          fontWeight: theme.typography.weight.medium,
          transition: `all 0.2s ${theme.easing.rubber}`,
          boxShadow: 'none',
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',

          '@media (hover: hover)': {
            '&:hover': hoverStyles,
          },

          '&:focus': focusStyles,

          '&:active': activeStyles,
        }}
        {...buttonProps}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

Button.defaultProps = {
  variant: 'primary',
  color: 'primary',
  size: 'big',
};

Button.propTypes = {
  /**
   * A React node, usually a string to be the button text or a combination of icons and button text.
   */
  children: PropTypes.node.isRequired,
  /** Sets the type of button. */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Determines the colors of the button. */
  color: PropTypes.oneOf(['basic', 'primary', 'danger', 'success', 'warning']),
  /** Determines the size of the button. */
  size: PropTypes.oneOf(['big', 'small']),
};
