import React, { Component, Suspense } from 'react';
import styled from 'styled-components';

import constants from './constants';
import Header from './layout/Header';
import LoadingOverlay from './common/LoadingOverlay';
import componentData from './config/component-data';

const Navigation = React.lazy(() => import('./layout/Navigation'));
const LandingView = React.lazy(() => import('./views/LandingView'));
const ComponentView = React.lazy(() => import('./views/ComponentView'));

const Wrapper = styled.div`
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 69px);
`;

export default class App extends Component {
  state = {
    route: this._getRoute(),
  };

  componentDidMount() {
    window.addEventListener('hashchange', this._setRouteState);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this._setRouteState);
  }

  render() {
    const appName = constants.app.name;
    const { route } = this.state;
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

  _getRoute() {
    return window.location.hash.substr(1);
  }

  _setRouteState = () => this.setState({ route: this._getRoute() });
}
