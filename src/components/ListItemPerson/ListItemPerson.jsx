import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLOR_WHITE, COLOR_DARK } from '@/constants';
import ActiveIndicator from '@/ActiveIndicator';
import Avatar from '@/Avatar';
import Typepography from '@/Typography';
import ListItemMoreOptions from '@common/ListItemMoreOptions';

const Wrapper = styled.div`
  background-color: ${COLOR_WHITE};
  color: ${COLOR_DARK};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 6.28125em;
  width: 100%;
  padding: 0.9375em;

  @media (min-width: 34em) {
    padding: 0 1.875em;
  }
`;

// @TODO+ListItemPerson: Fix items being pushed and responsiveness
const Text = styled.div`
  display: flex;
  flex: 0.86;
  flex-shrink: 1;
  flex-direction: column;
`;

const PrimaryText = styled.p`
  font-weight: 500;
  margin: 0 0 0.5em 0;
`;

/** Displays an overview for a person */
export default class ListItemPerson extends Component {
  static defaultProps = {
    active: false,
  };

  static propTypes = {
    /** The name to display */
    name: PropTypes.string.isRequired,

    /** A detail about this item */
    detail: PropTypes.string.isRequired,

    /**
     * If empty, this will hide the more options button. Otherwise, it will
     * render a button that when clicked will reveal a list of actions.
     */
    moreOptionsActions: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.node.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        color: PropTypes.oneOf(['default', 'primary']),
      }),
    ).isRequired,

    /** Sets the status of the person item */
    active: PropTypes.bool,

    /** Image to display before the name and details */
    avatar: PropTypes.string,

    /** Action to perform when item is clicked */
    onClick: PropTypes.func,
  };

  state = {
    isMoreOptionsOpen: false,
  };

  render() {
    const {
      active,
      avatar,
      name,
      detail,
      onClick,
      moreOptionsActions,
    } = this.props;
    const { isMoreOptionsOpen } = this.state;

    return (
      <Wrapper onClick={onClick}>
        <ActiveIndicator active={active} style={{ flexShrink: 0 }} />
        <Avatar size="smaller" src={avatar} style={{ flexShrink: 0 }} />
        <Text>
          <PrimaryText>{name}</PrimaryText>
          <Typepography>{detail}</Typepography>
        </Text>
        <ListItemMoreOptions
          actions={moreOptionsActions}
          isOpen={isMoreOptionsOpen}
          onClick={this._handleMoreOptionsOnClick}
        />
      </Wrapper>
    );
  }

  _handleMoreOptionsOnClick = () =>
    this.setState((prevState) => ({
      isMoreOptionsOpen: !prevState.isMoreOptionsOpen,
    }));
}
