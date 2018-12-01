import React, { Component } from 'react';

import Header from './docs/Header';
import Navigation from './docs/Navigation';
import ComponentPage from './docs/ComponentPage';
import componentData from './docs/component-data';

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
      ? componentData.filter((component) => component.name === route)[0]
      : componentData[0];

    return (
      <React.Fragment>
        <Header title="Alys docs" />
        <Navigation
          components={componentData.map((component) => component.name)}
        />

        <ComponentPage component={component} />
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
