import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PrismCode from './PrismCode';

import 'prismjs/themes/prism-okaidia.css';
import './prism';

export default class SyntaxHighlightedCode extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  render() {
    return (
      <pre ref={this._handleRef}>
        <PrismCode className="language-jsx">{this.props.children}</PrismCode>
      </pre>
    );
  }

  _handleRef = (ref) => (this.element = ref);
}
