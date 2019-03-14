import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import PrismCode from './PrismCode';

import 'prismjs/themes/prism-okaidia.css';
import './prism';

export default function SyntaxHighlightedCode({ children }) {
  // eslint-disable-next-line no-unused-vars
  let element = useRef(null);

  const handleRef = (ref) => (element = ref);

  return (
    <pre ref={handleRef}>
      <PrismCode className="language-jsx">{children}</PrismCode>
    </pre>
  );
}

SyntaxHighlightedCode.propTypes = {
  children: PropTypes.string.isRequired,
};
