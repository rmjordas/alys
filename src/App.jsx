import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './docs/Header';
import Navigation from './docs/Navigation';
import ComponentPage from './docs/ComponentPage';
import componentData from './docs/component-data';

const MainContent = styled.div`
  position: fixed;
  width: 100%;
  overflow-y: auto;
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
    const { route } = this.state;
    const component = route
      ? componentData.filter(({ name }) => name === route)[0]
      : componentData[0];

    return (
      <React.Fragment>
        <Header
          title="Alys / Components"
          repoLink="https://github.com/rmjordas/alys"
        />

        <MainContent>
          <Navigation
            components={componentData.map(({ name }) => name)}
            active={route}
          />

          <ComponentPage component={component} />
        </MainContent>
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
