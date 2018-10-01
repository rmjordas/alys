import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border-radius: 5px;
  color: #efefef;
  background: deeppink;
  padding: 8px 15px;
  border: none;
  outline: none;
`;

function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

export default Button;
