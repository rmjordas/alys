import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  appearance: none;
  color: ${({ on }) => (on ? '#f8f8f2' : '#666')};
  text-transform: uppercase;
  background-color: ${({ on }) => (on ? '#272822' : '#ddd')};
  border: none;
  outline: none;
  padding: 0.3em 0.4em;
  font-size: 0.75em;
  cursor: pointer;
  letter-spacing: 0.05em;
  font-family: inherit;
  margin-right: 1em;

  &&:last-child {
    margin-right: 0;
  }
`;

/** A button that changes the text it displays depending on the `show` prop */
export default function ToggleButton({ on, onClick, onText, offText }) {
  return (
    <Button onClick={onClick} on={on}>
      {on ? onText : offText}
    </Button>
  );
}

ToggleButton.defaultProps = {
  on: false,
};

ToggleButton.propTypes = {
  /** Handler when button is clicked */
  onClick: PropTypes.func.isRequired,

  /** Text to show when `on` prop is true */
  onText: PropTypes.string.isRequired,

  /** Text to show when `off` prop is true */
  offText: PropTypes.string.isRequired,

  /** Determines the appearance and text of button */
  on: PropTypes.bool,
};
