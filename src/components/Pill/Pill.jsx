import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TYPE_FONT_SIZE_HEADING_6, COLOR_WHITE, colors } from '@/constants';
import NewIcon from '@/NewIcon';

const Wrapper = styled.div`
  display: inline-block;
  font-size: ${TYPE_FONT_SIZE_HEADING_6}px;
  font-weight: 500;
  padding: 0.5em 0.75em;
  border-radius: 0.375em;
  background-color: ${({ color }) => colors[color]};
  color: ${COLOR_WHITE};
  text-transform: uppercase;
`;

const AddIcon = styled(NewIcon).attrs(() => ({
  fontSize: `${TYPE_FONT_SIZE_HEADING_6}px`,
}))`
  && line {
    stroke: ${COLOR_WHITE};
  }
`;

/** Text inside a small container */
export default function Pill({ text, color, add }) {
  return <Wrapper color={color}>{add ? <AddIcon /> : text}</Wrapper>;
}

Pill.defaultProps = {
  color: 'primary',
  add: false,
};

Pill.propTypes = {
  /** Text to display */
  text: PropTypes.string.isRequired,

  /** Background color of text wrapper */
  color: PropTypes.oneOf(['primary', 'secondary']),

  /** If set to `true`, a `NewIcon` will be shown and `text` is ignored */
  add: PropTypes.bool,
};
