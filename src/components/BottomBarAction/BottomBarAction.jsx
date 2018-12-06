import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLOR_GRAY_BLUE, COLOR_PRIMARY } from '@/constants';

const Action = styled.div`
  padding: 1.75em 3.5em;
  cursor: pointer;
  color: ${COLOR_GRAY_BLUE};

  svg {
    transition: color 0.2s ease-in-out;
    color: ${({ selected }) => (selected ? COLOR_PRIMARY : 'inherit')};
  }

  &:hover svg {
    color: ${COLOR_PRIMARY};
  }
`;

/** An action item inside a bottom bar */
export default class BottomBarAction extends Component {
  static propTypes = {
    /** Value to be passed to a `BottomBar` parent's `onChange` prop  */
    value: PropTypes.string,

    /** Icon to display */
    icon: PropTypes.node.isRequired,
  };

  render() {
    const { icon, selected } = this.props;

    return (
      <Action selected={selected} onClick={this._handleOnClick}>
        {icon}
      </Action>
    );
  }

  _handleOnClick = (event) => {
    const { value, onChange } = this.props;

    if (onChange) {
      onChange(event, value);
    }
  };
}
