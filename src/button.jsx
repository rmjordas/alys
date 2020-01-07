/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useColor } from './internal/use-color';

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

    const { h200, h400, h500, h600 } = useColor(pColor);

    let border = 'none';
    let backgroundColor = h500;
    let color = h500;

    let hoverStyles = {
      cursor: 'pointer',
    };

    let focusStyles = {
      boxShadow: `0 0 0 4px ${h200}`,
    };

    let activeStyles = {
      color: theme.color.baseInvert,
      backgroundColor: h600,
    };

    switch (variant) {
      case 'secondary':
        border = `2px solid ${pColor === 'basic' ? theme.color.subtle : h500}`;
        backgroundColor = 'transparent';
        color = h500;

        hoverStyles.borderColor = h500;
        hoverStyles.backgroundColor = pColor === 'basic' ? theme.color.subtle : h500;
        hoverStyles.color = pColor === 'basic' ? theme.color.description : theme.color.baseInvert;

        activeStyles.borderColor = pColor === 'basic' ? 'lightgrey' : h600;
        break;
      case 'primary':
      default:
        color = theme.color.baseInvert;

        hoverStyles.backgroundColor = pColor === 'basic' ? theme.color.subtle : h400;

        focusStyles.backgroundColor = h500;
        break;
    }

    if (pColor === 'basic') {
      color = theme.color.description;

      focusStyles.boxShadow = '0 0 0 4px lightskyblue';

      activeStyles.backgroundColor = 'lightgrey';
      activeStyles.color = theme.color.description;
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
