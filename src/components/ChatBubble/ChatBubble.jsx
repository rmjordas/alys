import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  COLOR_DARK,
  COLOR_WHITE,
  COLOR_WHITE_BLUE,
  TYPE_FONT_SIZE_PARAGRAPH,
} from '@/constants';
import { styleLengths } from '@utils/string-utils';

const Wrapper = styled.div`
  ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background: ${COLOR_WHITE_BLUE};
          color: ${COLOR_DARK};
        `;
      case 'default':
      default:
        return css`
          background: linear-gradient(to top right, #5574f7, #60c3ff);
          color: ${COLOR_WHITE};
        `;
    }
  }};
  border-radius: 0.375em;
  padding: 1.3125rem;
  position: relative;

  ::after {
    content: '';
    height: 0;
    border-top: 0.421875rem solid transparent;
    border-bottom: 0.421875rem solid transparent;
    ${({ arrowSide, variant }) => {
      switch (arrowSide) {
        case 'left':
          return css`
            border-right: 0.43rem solid
              ${variant === 'secondary' ? COLOR_WHITE_BLUE : '#5a99fb'};
            left: -0.43rem;
          `;
        case 'right':
        default:
          return css`
            border-left: 0.43rem solid
              ${variant === 'secondary' ? COLOR_WHITE_BLUE : '#60c3ff'};
            right: -0.43rem;
          `;
      }
    }}
    position: absolute;
    top: 0.83125rem;
    width: 0;
  }
`;

const Message = styled.p`
  font-size: ${styleLengths(TYPE_FONT_SIZE_PARAGRAPH)};
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
`;

export default function ChatBubble({ children, ...wrapperProps }) {
  return (
    <Wrapper {...wrapperProps}>
      <Message>{children}</Message>
    </Wrapper>
  );
}

ChatBubble.defaultProps = {
  arrowSide: 'right',
  variant: 'default',
};

ChatBubble.propTypes = {
  /** Message to display inside the chat bubble */
  children: PropTypes.string.isRequired,

  /** Side to display the chat bubbble arrow */
  arrowSide: PropTypes.oneOf(['left', 'right']),

  /** Main appearance of chat bubble */
  variant: PropTypes.oneOf(['default', 'secondary']),

  /** Time information for a message */
  timestamp: PropTypes.instanceOf(Date),
};
