import React, { Suspense, lazy, useState, useEffect } from 'react';
import styled from 'styled-components';

import constants from './constants';
import Header from './layout/Header';
import LoadingOverlay from './common/LoadingOverlay';
import componentData from './config/component-data';

const Navigation = lazy(() => import('./layout/Navigation'));
const LandingView = lazy(() => import('./views/LandingView'));
const ComponentView = lazy(() => import('./views/ComponentView'));

const Wrapper = styled.div`
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 69px);
`;

/** Documentation application entry point */
export default function App() {
  const getRoute = () => window.location.hash.substr(1);
  const [route, setRoute] = useState(getRoute);
  const setRouteState = () => setRoute(getRoute);

  useEffect(() => {
    window.addEventListener('hashchange', setRouteState);

    return () => window.removeEventListener('hashchange', setRouteState);
  }, []);

  const appName = constants.app.name;
  const component = route
    ? componentData.filter(({ name }) => name === route)[0]
    : componentData[0];

  return (
    <Wrapper>
      <Header
        title={route ? `${appName} / Components` : appName}
        repoLink={constants.repoLink}
      />

      {route ? (
        <Suspense fallback={<LoadingOverlay />}>
          <MainContent>
            <Navigation
              components={componentData.map(({ name }) => name)}
              active={route}
            />

            <ComponentView component={component} />
          </MainContent>
        </Suspense>
      ) : (
        <Suspense fallback={<LoadingOverlay />}>
          <LandingView component={component.name} />
        </Suspense>
      )}
    </Wrapper>
  );
}
