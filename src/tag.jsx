/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { CloseIcon } from './icons/close-icon';

export const Tag = forwardRef(
  ({ color: pColor, disabled, variant, onClose, children, ...tagProps }, ref) => {
    const theme = useTheme().default;

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

    let border = 'none';
    let color;
    let backgroundColor = h500;

    let hoverStyles = {
      backgroundColor: h600,
    };

    switch (variant) {
      case 'secondary':
        border = `1px solid ${h500}`;
        color = pColor === 'basic' ? theme.color.description : h500;
        backgroundColor = 'transparent';

        hoverStyles.border = `1px solid ${h500}`;
        hoverStyles.backgroundColor = pColor === 'basic' ? theme.color.subtle : h500;
        hoverStyles.color = pColor === 'basic' ? theme.color.description : theme.color.baseInvert;
        break;
      case 'primary':
      default:
        border = 'none';
        color = pColor === 'basic' ? theme.color.description : theme.color.baseInvert;
        backgroundColor = h500;

        hoverStyles.backgroundColor = pColor === 'basic' ? 'lightgrey' : h400;
        break;
    }

    if (disabled) {
      border = variant === 'secondary' ? `1px solid ${theme.color.subtle}` : 'none';
      backgroundColor = variant === 'secondary' ? 'transparent' : theme.color.subtle;
      color = theme.color.textSubtle;
      hoverStyles = undefined;
    }

    return (
      <div
        css={{
          border,
          color,
          backgroundColor,
          fontFamily: theme.typography.fonts.base,
          fontSize: theme.typography.size.s1,
          fontWeight: theme.typography.weight.medium,
          display: 'inline',
          borderRadius: 5,
          padding: '0.375em 0.875em',
          cursor: 'default',
          userSelect: 'none',
          transition: `all 0.2s ${theme.easing.rubber}`,

          '@media (hover: hover)': {
            '&:hover': hoverStyles,
          },
        }}
        {...tagProps}
        ref={ref}
      >
        {children}
        {onClose && (
          <CloseIcon
            css={{ opacity: 0.7, paddingLeft: '0.375em', cursor: disabled ? 'default' : 'pointer' }}
            onClick={onClose}
            width={13}
            height={13}
          />
        )}
      </div>
    );
  },
);

Tag.displayName = 'Tag';

Tag.defaultProps = {
  color: 'primary',
  disabled: false,
  variant: 'primary',
  onClose: undefined,
};

Tag.propTypes = {
  /** Text to display inside the tag */
  children: PropTypes.string.isRequired,
  /** Determines the colors of the tag */
  color: PropTypes.oneOf(['basic', 'primary', 'danger', 'success', 'warning']),
  /** If true, it the tag cannot be interacted with */
  disabled: PropTypes.bool,
  /** Sets the type of tag */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** If defined, a clickable close icon will be placed beside the tag text */
  onClose: PropTypes.func,
};
