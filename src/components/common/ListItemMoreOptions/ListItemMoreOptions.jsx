import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import OptionsIcon from '@/OptionsIcon';
import ListItemMoreOptionsAction from './ListItemMoreOptionsAction';

const Wrapper = styled.div`
  cursor: pointer;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

/** Toggles between hiding and showing more option actions */
export default function ListItemMoreOptions({ isOpen, actions, onClick }) {
  return (
    <Wrapper onClick={onClick} visible={actions.length > 0}>
      {isOpen ? (
        <ListItemMoreOptionsAction actions={actions} />
      ) : (
        <OptionsIcon />
      )}
    </Wrapper>
  );
}

ListItemMoreOptions.defaultProps = {
  isOpen: false,
};

ListItemMoreOptions.propTypes = {
  /** List of actions to display */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      color: PropTypes.oneOf(['default', 'primary']),
    }),
  ).isRequired,

  /** Action */
  onClick: PropTypes.func.isRequired,

  /** Determines if more actions will be rendered */
  isOpen: PropTypes.bool,
};
