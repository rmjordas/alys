import React, { Component } from 'react';
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
export default class ListItemMoreOptionsAction extends Component {
  static propTypes = {
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

  render() {
    return (
      <Wrapper>
        <ButtonWrapper>{this._generateActionButtons()}</ButtonWrapper>
        <CloseIcon />
      </Wrapper>
    );
  }

  _generateActionButtons = () => {
    return this.props.actions.map((action) => (
      <ListItemMoreOptionsActionButton key={action.label} {...action} />
    ));
  };
}
