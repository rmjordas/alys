import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CloseIcon from '@/CloseIcon';
import ListItemMoreOptionsActionButton from './ListItemMoreOptionsActionButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1.1875em;
`;

/** Container for a action item buttons */
export default function ListItemMoreOptionsAction({ actions }) {
  return (
    <Wrapper>
      <ButtonWrapper>
        {actions.map((action) => (
          <ListItemMoreOptionsActionButton key={action.label} {...action} />
        ))}
      </ButtonWrapper>
      <CloseIcon />
    </Wrapper>
  );
}

ListItemMoreOptionsAction.propTypes = {
  /** List of actions to display */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      color: PropTypes.oneOf(['default', 'primary']),
    }),
  ).isRequired,
};
