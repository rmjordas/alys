import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;

/** Container for a set of list sub-items */
export default function List({ component, children, ...componentProps }) {
  let Component = component;

  if (component === 'ul') {
    Component = Ul;
  }

  return <Component {...componentProps}>{children}</Component>;
}

List.defaultProps = {
  component: 'ul',
};

List.propTypes = {
  /** A set of List sub-item components */
  children: PropTypes.node.isRequired,

  /** Component to use as a wrapper */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
  ]),
};
