import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as logo } from './assets/logo-icon.svg';
import { ReactComponent as github } from './assets/github.svg';

const AlysLogo = styled(logo).attrs(() => ({
  height: '20px',
  width: '20px',
}))`
  margin: 0 0.5em;
`;

const GithubLogo = styled(github).attrs(() => ({
  height: '20px',
  width: '20px',
}))`
  margin: 0 0.5em;

  && path {
    fill: #fff;
  }
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

const Brand = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;

  &:visited {
    color: #fff;
  }
`;

const Link = styled.a`
  font-size: 1.5em;
  line-height: 1.5;
  text-decoration: none;

  &:visited {
    color: #fff;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

export default function Header({ title, repoLink }) {
  return (
    <Wrapper>
      <Brand as="a" href="/">
        <AlysLogo />
        <Link as="span">{title}</Link>
      </Brand>

      <Spacer />

      <Link href={repoLink}>
        <GithubLogo />
      </Link>
    </Wrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
