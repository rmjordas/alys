/* global Prism */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function PrismCode({
  async,
  className,
  component: Wrapper,
  children,
}) {
  let domNode = useRef(null);

  useEffect(() => {
    Prism.highlightElement(domNode, async);
  });

  const handleRefMount = (ref) => (domNode = ref);

  return (
    <Wrapper ref={handleRefMount} className={className}>
      {children}
    </Wrapper>
  );
}

PrismCode.defaultProps = {
  component: 'code',
};

PrismCode.propTypes = {
  async: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
  component: PropTypes.node,
};
