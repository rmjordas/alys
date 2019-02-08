import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLOR_WHITE, COLOR_PRIMARY_LIGHT, colors } from '@/constants';

const ActionButton = styled.div`
  background-color: ${({ color }) =>
    color === 'default' ? COLOR_PRIMARY_LIGHT : colors[color]};
  color: ${COLOR_WHITE};
  padding: 0.75em 1em;
  vertical-align: middle;

  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

/** Button group to show when more options icon is expanded */
export default function ListItemMoreOptionsActionButton({
  onClick,
  color,
  label,
  icon,
}) {
  const handleOnActionButtonClick = (onClick) => (event) => {
    event.stopPropagation();

    onClick();
  };

  return (
    <ActionButton
      onClick={handleOnActionButtonClick(onClick)}
      color={color}
      title={label}
    >
      {icon}
    </ActionButton>
  );
}

ListItemMoreOptionsActionButton.defaultProps = {
  color: 'default',
};

ListItemMoreOptionsActionButton.propTypes = {
  /** Button icon */
  icon: PropTypes.node.isRequired,

  /** Label for button */
  label: PropTypes.string.isRequired,

  /** Handler for button clicks */
  onClick: PropTypes.func.isRequired,

  /** Button background color */
  color: PropTypes.oneOf(['default', 'primary']),
};
