import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  COLOR_PRIMARY,
  COLOR_WHITE,
  COLOR_GRAY_BLUE,
  GRADIENT_PRIMARY,
  TYPE_FONT_SIZE_HEADING_6,
} from '@/constants';
import { styleLengths } from '@utils/string-utils';

const disabledStyles = css`
  background-color: ${COLOR_GRAY_BLUE};

  && {
    cursor: default;
  }
`;

/**
 * Returns `null` if an icon node is not provided. Otherwise, it returns a
 * styled <Icon /> component.
 */
function buttonIcon({ icon, type = 'default', iconOnly = false }) {
  if (!icon) {
    return null;
  }

  const Icon = styled(icon).attrs(() => ({
    dark: type !== 'link',
  }))`
    margin-right: ${iconOnly ? 0 : '1.125em'};
    vertical-align: middle;

    && svg {
      font-size: 1.125em;
    }
  `;

  return <Icon />;
}

/** Linear gradient value builder for the `background` property. */
function linearGradient(colors) {
  return `linear-gradient(to right, ${colors})`;
}

const BasicButton = styled.div.attrs(({ text }) => ({
  children: text,
  role: 'button',
}))`
  border: 0;
  outline: none;
  user-select: none;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  background: ${({ type }) =>
    type === 'link' ? 'transparent' : COLOR_PRIMARY};
  color: ${({ type }) => (type === 'link' ? COLOR_PRIMARY : COLOR_WHITE)};
  text-transform: uppercase;
  border-radius: 0.375em;
  padding: 1em;
  font-size: ${styleLengths(TYPE_FONT_SIZE_HEADING_6)};
  font-weight: 500;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  ${({ disabled }) => disabled && disabledStyles}
`;

const IconOnlyButton = styled(BasicButton).attrs(({ icon }) => ({
  children: buttonIcon({ icon, iconOnly: true }),
}))`
  border-radius: 50%;
`;

const WideButton = styled(BasicButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({ type, disabled }) => {
    if (disabled) {
      return type === 'link' ? 'transparent' : COLOR_GRAY_BLUE;
    }

    return type === 'link' ? 'transparent' : linearGradient(GRADIENT_PRIMARY);
  }};
  color: ${({ type, disabled, theme: { darkMode } }) => {
    if (type === 'link') {
      if (disabled) {
        return 'inherit';
      }

      return darkMode ? 'inherit' : COLOR_PRIMARY;
    }

    return COLOR_WHITE;
  }};
  border-radius: ${({ block }) => (block ? 0 : '0.375em')};
  min-height: 4em;
  margin: ${({ block }) => (block ? 0 : '1.25em 1.875em')};
`;

/**
 * Button signals to the user that an action can be performed by clicking or
 * taping this element.
 */
export default function Button({
  basic,
  text,
  block,
  type,
  icon,
  iconOnly,
  ...props
}) {
  if (props.disabled) {
    props.onClick = undefined;
  }

  if (iconOnly) {
    return <IconOnlyButton icon={icon} {...props} />;
  }

  if (basic) {
    return <BasicButton text={text} type={type} {...props} />;
  }

  return (
    <WideButton block={block} type={type} {...props}>
      {buttonIcon({ icon, type })} {text}
    </WideButton>
  );
}

Button.defaultProps = {
  basic: false,
  block: false,
  color: 'default',
  icon: null,
  iconOnly: false,
  type: 'default',
  disabled: false,
};

Button.propTypes = {
  /** Text to display on the button */
  text: PropTypes.string,

  /** Handler to call when button is clicked */
  onClick: PropTypes.func,

  /** If set to `true`, the button cannot be interacted with */
  disabled: PropTypes.bool,

  /**
   * Button width is determined by the content. If set to `true`, the value of
   * `icon` will be ignored.
   */
  basic: PropTypes.bool,

  /** If set to `true`, the button's width will span it's container's width */
  block: PropTypes.bool,

  /** Button color preset */
  color: PropTypes.oneOf(['default', 'secondary']),

  /** Button type */
  type: PropTypes.oneOf(['default', 'link']),

  /** The icon to be displayed before the button text */
  icon: PropTypes.func,

  /**
   * A button that contains only an icon. If this is set to `true` the value of
   * `text` is ignored.
   */
  iconOnly: PropTypes.bool,
};
