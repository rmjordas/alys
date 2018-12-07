import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TYPE_FONT_SIZE_HEADING_6 } from '@/constants';

const StyledLabel = styled.label`
  font-weight: 500;
  text-transform: uppercase;
  font-size: ${TYPE_FONT_SIZE_HEADING_6};
`;

/** Caption for an interface item. */
export default function Label({ text, htmlFor }) {
  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>;
}

Label.propTypes = {
  /** Text to display */
  text: PropTypes.string.isRequired,

  /** Element ID the label is associated with */
  htmlFor: PropTypes.string.isRequired,
};
