/* global Prism */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PrismCode extends PureComponent {
  static defaultProps = {
    component: `code`,
  };

  static propTypes = {
    async: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any,
    component: PropTypes.node,
  };

  componentDidMount() {
    this._highlight();
  }

  componentDidUpdate() {
    this._highlight();
  }

  render() {
    const { className, component: Wrapper, children } = this.props;

    return (
      <Wrapper ref={this._handleRefMount} className={className}>
        {children}
      </Wrapper>
    );
  }

  _highlight() {
    Prism.highlightElement(this._domNode, this.props.async);
  }

  _handleRefMount = (domNode) => (this._domNode = domNode);
}
