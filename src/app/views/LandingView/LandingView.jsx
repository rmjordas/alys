import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from '../../common/AppLogo';
import constants from '../../constants';

const AppLogo = styled(Logo).attrs(() => ({
  width: '15em',
  height: '15em',
}))`
  flex: 0.5;

  && g {
    fill: #333;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: calc(100% - 69px);
  flex-direction: column;
  justify-content: center;
`;

const MainTitle = styled.h1`
  flex: 0.15;
  line-height: 2.5;
  margin: 0;
  font-weight: 500;
`;

const SubTitle = styled.p`
  flex: 0.05;
  font-size: 1.125em;
`;

const GetStarted = styled.a.attrs(() => ({
  children: 'Get Started →',
}))`
  background-color: #333;
  color: #fff;
  border-radius: 0.375em;
  font-weight: 500;
  padding: 1em 1.5em;
  text-decoration: none;

  &:visited {
    color: #fff;
  }
`;

/** Page to show at the home page */
export default function LandingPage({ component }) {
  return (
    <Wrapper>
      <AppLogo />

      <MainTitle>{constants.app.name}</MainTitle>
      <SubTitle>{constants.app.description}</SubTitle>

      <GetStarted href={`#${component}`} />
    </Wrapper>
  );
}

LandingPage.propTypes = {
  /** Component to render on button click */
  component: PropTypes.string.isRequired,
};
