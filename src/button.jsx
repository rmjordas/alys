/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

export const Button = ({ variant, color, children, ...buttonProps }) => {
  const theme = useTheme().default;

  let buttonStyles = {
    border: '0',
    outline: '0',
    userSelect: 'none',
    borderRadius: '0.3125em',
    padding: '0.875em 2.25em',
    fontFamily: theme.typography.fonts.base,
    fontWeight: theme.typography.weight.medium,
    fontSize: '0.9375em',
    transition: `all 0.2s ${theme.easing.rubber}`,
    boxShadow: 'none',

    '@media (hover: hover)': {
      '&:hover': {
        cursor: 'pointer',
        boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.12)',
      },
    },

    '&:focus': {
      boxShadow: '0 0 0 4px lightskyblue',
    },
  };
  let highlight = theme.color.accent;
  let highlight200 = theme.color.accent200;
  let highlight400 = theme.color.accent400;
  let highlight600 = theme.color.accent600;
  switch (color) {
    case 'danger':
      highlight = theme.color.danger;
      highlight200 = theme.color.danger200;
      highlight400 = theme.color.danger400;
      highlight600 = theme.color.danger600;
      break;
    case 'warning':
      highlight = theme.color.warning;
      highlight200 = theme.color.warning200;
      highlight400 = theme.color.warning400;
      highlight600 = theme.color.warning600;
      break;
    case 'success':
      highlight = theme.color.success;
      highlight200 = theme.color.success200;
      highlight400 = theme.color.success400;
      highlight600 = theme.color.success600;
      break;
    case 'basic':
      highlight = theme.color.subtle;
      highlight200 = theme.color.subtle200;
      highlight400 = theme.color.subtle400;
      highlight600 = theme.color.subtle600;
      break;
    case 'primary':
    default:
      highlight = theme.color.accent;
      highlight200 = theme.color.accent200;
      highlight400 = theme.color.accent400;
      highlight600 = theme.color.accent600;
      break;
  }

  buttonStyles.backgroundColor = highlight;

  switch (variant) {
    case 'secondary':
      buttonStyles = {
        ...buttonStyles,
        border: `2px solid ${highlight}`,
        borderRadius: 5,
        backgroundColor: 'transparent',
        color: color === 'basic' ? theme.color.description : highlight,

        '@media (hover: hover)': {
          '&:hover': {
            ...buttonStyles['@media (hover: hover)']['&:hover'],
            borderColor: highlight400,
            color: color === 'basic' ? theme.color.textSubtle : highlight400,
          },
        },
        '&:focus': {
          ...buttonStyles['&:focus'],
          boxShadow: color === 'basic' ? `0 0 0 4px lightskyblue` : `0 0 0 4px ${highlight200}`,
        },
        '&:active': {
          borderColor: highlight600,
          color: color === 'basic' ? theme.color.description600 : highlight600,
        },
      };
      break;
    case 'primary':
    default:
      buttonStyles = {
        ...buttonStyles,
        color: color === 'basic' ? theme.color.description : theme.color.baseInvert,

        '@media (hover: hover)': {
          '&:hover': {
            ...buttonStyles['@media (hover: hover)']['&:hover'],
            backgroundColor: highlight400,
          },
        },
        '&:focus': {
          ...buttonStyles['&:focus'],
          backgroundColor: highlight,
          boxShadow: color === 'basic' ? `0 0 0 4px lightskyblue` : `0 0 0 4px ${highlight200}`,
        },
        '&:active': {
          backgroundColor: highlight600,
        },
      };
      break;
  }

  if (buttonProps.disabled) {
    buttonProps.onClick = undefined;
    buttonStyles = {
      ...buttonStyles,
      border: variant === 'secondary' ? `2px solid ${theme.color.subtle}` : 'none',
      backgroundColor: variant === 'secondary' ? 'transparent' : theme.color.subtle,
      color: theme.color.textSubtle,
    };
    buttonStyles['@media (hover: hover)'] = undefined;
    buttonStyles['&:focus'] = undefined;
    buttonStyles['&:active'] = undefined;
  }

  return (
    <button css={buttonStyles} {...buttonProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'primary',
  color: 'primary',
};

Button.propTypes = {
  /** Sets the type of button. */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Determines the colors of the button. */
  color: PropTypes.oneOf(['basic', 'primary', 'danger', 'success', 'warning']),
  /**
   * A React node, usually a string or a combination of icons and button text.
   */
  children: PropTypes.node.isRequired,
};
