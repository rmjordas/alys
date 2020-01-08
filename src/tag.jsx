/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { CloseIcon } from './icons/close-icon';
import { useColor } from './internal';

export const Tag = forwardRef(
  ({ color: pColor, disabled, variant, onClose, children, ...tagProps }, ref) => {
    const theme = useTheme().default;

    let padding = '0.375em 0.875em';

    if (onClose) {
      padding = '0.375em 0.625em';
    }

    const { h400, h500, h600 } = useColor(pColor);

    let border = 'none';
    let color;
    let backgroundColor = h500;

    let hoverStyles = {
      backgroundColor: h600,
    };

    switch (variant) {
      case 'secondary':
        border = `1px solid ${pColor === 'basic' ? theme.color.subtle : h500}`;
        color = h500;
        backgroundColor = 'transparent';

        hoverStyles.border = `1px solid ${h500}`;
        hoverStyles.backgroundColor = pColor === 'basic' ? theme.color.subtle : h500;
        hoverStyles.color = pColor === 'basic' ? theme.color.description : theme.color.baseInvert;
        break;
      case 'primary':
      default:
        border = 'none';
        color = theme.color.baseInvert;
        backgroundColor = pColor === 'basic' ? theme.color.subtle : h500;

        hoverStyles.backgroundColor = pColor === 'basic' ? 'lightgrey' : h400;
        break;
    }

    if (pColor === 'basic') {
      color = theme.color.description;
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
          padding,
          fontFamily: theme.typography.fonts.base,
          fontSize: theme.typography.size.s1,
          fontWeight: theme.typography.weight.medium,
          display: 'inline-block',
          borderRadius: 5,
          cursor: 'default',
          userSelect: 'none',
          transition: `all 0.2s ${theme.easing.rubber}`,
          height: '1.75em',
          lineHeight: 1.75,

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
            css={{
              opacity: 0.7,
              paddingLeft: '0.375em',
              marginRight: '-0.375em',
              cursor: disabled ? 'default' : 'pointer',
            }}
            onClick={onClose}
            width={theme.typography.size.m1}
            height={theme.typography.size.m1}
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
