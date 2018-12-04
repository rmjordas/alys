import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  COLOR_PRIMARY,
  COLOR_WHITE,
  GRADIENT_PRIMARY,
  TYPE_FONT_SIZE_HEADING_6,
} from '@/constants';
import { styleLengths } from '../utils/string-utils';

const linearGradient = (colors) => `linear-gradient(to right, ${colors})`;

// @TODO+Button: Styles for Button states (hover, clicked, etc.)
const BasicButton = styled.div.attrs(({ text }) => ({
  children: text,
}))`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  background: ${COLOR_PRIMARY};
  color: ${COLOR_WHITE};
  text-transform: uppercase;
  border-radius: 0.375em;
  padding: 1em;
  font-size: ${styleLengths(TYPE_FONT_SIZE_HEADING_6)};
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;

const IconOnlyButton = styled(BasicButton)`
  border-radius: 50%;
`;

const OtherButton = styled(BasicButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({ type }) =>
    type === 'link' ? 'transparent' : linearGradient(GRADIENT_PRIMARY)};
  color: ${({ type }) => (type === 'link' ? COLOR_PRIMARY : COLOR_WHITE)};
  border-radius: ${({ block }) => (block ? 0 : '0.375em')};
  min-height: 1.75em;
  margin: ${({ block }) => (block ? 0 : '1.25em 1.875em')};
`;

/**
 * Button signals to the user that an action can be performed by clicking or
 * taping this element.
 */
export default function Button({ basic, text, block, type, icon, iconOnly }) {
  // @WARN+Button: This components gets created every render!
  let ButtonIcon = () => null;

  if (icon) {
    ButtonIcon = styled(icon).attrs(() => ({
      dark: type !== 'link',
      color: 'primary',
    }))`
      margin-right: ${iconOnly ? 0 : '1.125em'};
      vertical-align: middle;

      && svg {
        font-size: 1.125em;
      }
    `;
  }

  return iconOnly ? (
    <IconOnlyButton>
      <ButtonIcon />
    </IconOnlyButton>
  ) : basic ? (
    <BasicButton text={text} />
  ) : (
    <OtherButton block={block} type={type}>
      <ButtonIcon /> {text}
    </OtherButton>
  );
}

Button.defaultProps = {
  basic: false,
  block: false,
  color: 'default',
  icon: null,
  iconOnly: false,
  type: 'default',
};

Button.propTypes = {
  /** Handler to call when button is clicked */
  onClick: PropTypes.func.isRequired,

  /** Text to display on the button */
  text: PropTypes.string,

  /**
   * Button width is determined by the content. If set to `true`, the value of
   * `icon` will be ignored.
   */
  basic: PropTypes.bool,

  /** Button width should span it's container's width */
  block: PropTypes.bool,

  /** Button color */
  color: PropTypes.oneOf(['default', 'secondary']),

  /** Button type */
  type: PropTypes.oneOf(['default', 'link']),

  /** The icon before the button text */
  icon: PropTypes.func,

  /**
   * Button with only an icon. If this is set to `true` the value of `text` is
   * ignored.
   */
  iconOnly: PropTypes.bool,
};
