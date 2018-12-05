import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppLogo from './AppLogo';
import { ReactComponent as github } from './assets/github.svg';

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

const Link = styled.a.attrs(
  ({ external }) =>
    external && {
      target: '_blank',
      rel: 'noopener noreferrer',
    },
)`
  color: #fff;
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

/** Header containing links to home page and the GitHub repository */
export default function Header({ title, repoLink }) {
  return (
    <Wrapper>
      <Brand as="a" href="#">
        <AppLogo />

        <Link as="span">{title}</Link>
      </Brand>

      <Spacer />

      <Link href={repoLink} external>
        <GithubLogo />
      </Link>
    </Wrapper>
  );
}

Header.propTypes = {
  /** Text to be shown for the link to the homepage */
  title: PropTypes.string.isRequired,
};
