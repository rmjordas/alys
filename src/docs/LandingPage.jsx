import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from './AppLogo';

const AppLogo = styled(Logo).attrs(() => ({
  width: '15em',
  height: '15em',
}))`
  flex: 1;
  padding: 4em 0;

  && g {
    fill: #333;
  }
`;

const OuterWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
`;

const InnerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
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
    <OuterWrapper>
      <InnerWrapper>
        <AppLogo />

        <h1>Alys</h1>
        <p>A tiny React component library</p>

        <GetStarted href={`#${component}`} />
      </InnerWrapper>
    </OuterWrapper>
  );
}

LandingPage.propTypes = {
  /** Component to render on button click */
  component: PropTypes.string.isRequired,
};
