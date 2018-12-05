import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavigationItem from './NavigationItem';

const List = styled.ul`
  float: left;
  width: 16em;
  list-style-type: none;
  padding: 1em;
  display: none;
  height: calc(100% - 2em);
  overflow-y: auto;
  margin: 0;

  @media (min-width: 60em) {
    display: block;
  }
`;

/** Navigation containing lists of component names. */
export default function Navigation({ components, active }) {
  return (
    <List>
      {components.map((name) => (
        <NavigationItem key={name} text={name} active={active === name} />
      ))}
    </List>
  );
}

Navigation.defaultProps = {
  active: '#',
};

Navigation.propTypes = {
  /** List of component names */
  components: PropTypes.arrayOf(PropTypes.string).isRequired,

  /** Name of component currently being viewed */
  active: PropTypes.string,
};
