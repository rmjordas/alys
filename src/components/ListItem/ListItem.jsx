import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLOR_PRIMARY } from '@/constants';
import Typography from '@/Typography';

const Disc = styled.div`
  min-width: 6px;
  max-width: 6px;
  height: 6px;
  background-color: ${COLOR_PRIMARY};
  border-radius: 50%;
  margin-right: 1.1875em;
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0 0 1.25em;

  &:last-child {
    padding: 0;
  }
`;

/** A sub-item of <List /> */
export default function ListItem({ children, ...props }) {
  return (
    <Li {...props}>
      <Disc />
      <Typography variant="p">{children}</Typography>
    </Li>
  );
}

ListItem.propTypes = {
  /** Contents of the list item */
  children: PropTypes.node.isRequired,
};
