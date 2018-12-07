import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLOR_WHITE } from '@/constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  max-height: 5.3125em;
  background: ${COLOR_WHITE};

  @media (min-width: 34em) {
    justify-content: center;
  }
`;

/**
 * Provides a list of action items that the user can click to move to another
 * page of the app.
 */
export default function BottomBar({ children: childrenProp, value, onChange }) {
  const children = React.Children.map(childrenProp, (child, i) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value === undefined ? i : child.props.value;

    return React.cloneElement(child, {
      selected: childValue === value,
      value: childValue,
      onChange,
    });
  });

  return <Wrapper>{children}</Wrapper>;
}

BottomBar.propTypes = {
  /** List of <BottomBarAction /> items */
  children: PropTypes.node.isRequired,

  /**
   * The <BottomBarAction /> child(ren) uses this value to determine if it is
   * selected
   */
  value: PropTypes.any,

  /**
   * Callback when `value` changes. Must have two params for the `event` object
   * and the `value`
   */
  onChange: PropTypes.func,
};
