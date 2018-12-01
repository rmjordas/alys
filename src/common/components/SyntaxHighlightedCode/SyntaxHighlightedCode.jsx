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
      <pre ref={(ref) => (this.element = ref)}>
        <PrismCode className="language-jsx">{this.props.children}</PrismCode>
      </pre>
    );
  }
}
