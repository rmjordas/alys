import React, { Component, Suspense } from 'react';
import styled from 'styled-components';

import Header from './docs/Header';
import componentData from './docs/component-data';

const Landing = React.lazy(() => import('./docs/Landing'));
const Navigation = React.lazy(() => import('./docs/Navigation'));
const ComponentPage = React.lazy(() => import('./docs/ComponentPage'));

const MainContent = styled.div`
  position: fixed;
  width: 100%;
  overflow-y: auto;
  height: calc(100% - 69px);
`;

// @TODO+App: Create proper Loading component
const Loading = <h2>Loading</h2>;

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
    const { route } = this.state;
    const component = route
      ? componentData.filter(({ name }) => name === route)[0]
      : componentData[0];

    return (
      <React.Fragment>
        <Header
          title={route ? 'Alys / Components' : 'Alys'}
          repoLink="https://github.com/rmjordas/alys"
        />

        {route ? (
          <Suspense fallback={Loading}>
            <MainContent>
              <Navigation
                components={componentData.map(({ name }) => name)}
                active={route}
              />

              <ComponentPage component={component} />
            </MainContent>
          </Suspense>
        ) : (
          <Suspense fallback={Loading}>
            <Landing component={component.name} />
          </Suspense>
        )}
      </React.Fragment>
    );
  }

  _getRoute() {
    return window.location.hash.substr(1);
  }

  _setRouteState = () => {
    this.setState({
      route: this._getRoute(),
    });
  };
}
