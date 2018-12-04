import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  padding: 0.5em 0;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: ${({ active }) => (active ? 500 : 400)};
`;

export default function NavigationItem({ text, active }) {
  return (
    <Item>
      <Link href={`#${text}`} active={active}>
        {text}
      </Link>
    </Item>
  );
}

NavigationItem.defaultProps = {
  active: false,
};

NavigationItem.propTypes = {
  /** Text to display */
  text: PropTypes.string.isRequired,

  /** `true` if item is currently viewed */
  active: PropTypes.bool,
};
