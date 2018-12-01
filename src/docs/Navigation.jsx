import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  float: left;
  width: 16em;
  list-style-type: none;
  padding: 1em;
  display: none;

  @media (min-width: 60em) {
    display: block;
  }
`;

export default function Navigation({ components }) {
  return (
    <List>
      {components.map((name) => (
        <li key={name}>
          <a href={`#${name}`}>{name}</a>
        </li>
      ))}
    </List>
  );
}

Navigation.propTypes = {
  components: PropTypes.arrayOf(PropTypes.string).isRequired,
};
