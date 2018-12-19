import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
`;

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  height: 100%;
  left: 0;
  padding-top: 200px;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100%;
  z-index: 998;
`;

const Spinner = styled.div`
  animation: ${spin} 0.8s linear infinite;
  border-radius: 50%;
  border: 4px solid #eee;
  border-top: 4px solid #555;
  bottom: 0;
  height: 4em;
  left: 0;
  margin: auto;
  overflow: show;
  position: fixed;
  right: 0;
  top: 0;
  transition: all 0.3s linear;
  width: 4em;
  z-index: 999;
`;

/** Shows an page overlay that has a spinner in the middle */
export default function LoadingPage() {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
}
