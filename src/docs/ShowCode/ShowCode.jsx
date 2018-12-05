import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  appearance: none;
  color: ${({ show }) => (show ? '#f8f8f2' : '#666')};
  text-transform: uppercase;
  background-color: ${({ show }) => (show ? '#272822' : '#ddd')};
  border: none;
  outline: none;
  padding: 0.3em 0.4em;
  font-size: 0.75em;
  cursor: pointer;
  letter-spacing: 0.05em;
  font-family: inherit;
`;

export default function ShowCode({ show, onClick }) {
  return (
    <Button onClick={onClick} show={show}>
      {show ? 'Hide Code' : 'Show Code'}
    </Button>
  );
}

ShowCode.defaultProps = {
  text: 'Show Code',
  show: false,
};

ShowCode.propTypes = {
  /** Sets appearance of button */
  show: PropTypes.bool,

  /** Handler when button is clicked */
  onClick: PropTypes.func.isRequired,
};
