import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as logo } from '../assets/logo-icon.svg';

const AlysLogo = styled(logo).attrs(() => ({
  height: '20px',
  width: '20px',
}))`
  margin-bottom: -0.3em;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 1em;
  color: #fff;
  background-color: #333;
  border-bottom: 1px solid #d4dadf;
  box-shadow: 0 1px 1px 0 rgba(116, 129, 141, 0.1);
`;

const Text = styled.h1`
  font-size: 1.5em;
  line-height: 1.5;
  font-weight: 500;
  padding-left: 1em;
  margin: 0;
`;

export default function Header({ title }) {
  return (
    <Wrapper>
      <AlysLogo />
      <Text>{title}</Text>
    </Wrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
