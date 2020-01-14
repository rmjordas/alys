/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

export const Tab = ({ selected, children, ...buttonProps }) => {
  const theme = useTheme().default;

  let color = theme.color.description;
  let cursor = 'pointer';

  if (selected) {
    color = theme.color.accent;
  }

  if (buttonProps.disabled) {
    color = theme.color.textSubtle;
    cursor = 'default';
  }

  return (
    <button
      css={{
        color,
        cursor,
        appearance: 'none',
        fontSize: theme.typography.size.s2,
        padding: '0.625em 0.375em',
        backgroundColor: 'transparent',
        margin: 0,
        fontWeight: theme.typography.weight.medium,
        border: '0 solid transparent',
        borderTop: '0.1875em solid transparent',
        borderBottom: `0.1875em solid ${selected ? theme.color.accent : 'transparent'}`,
        transition: `.2s color ${theme.easing.rubber}`,

        '&:focus': {
          outline: 'none',
          borderBottomColor: selected ? theme.color.accent : theme.color.subtle,
        },

        '&:not(:last-child)': {
          marginRight: '1em',
        },
      }}
      tabIndex={selected ? 0 : -1}
      {...buttonProps}
      role="tab"
      aria-selected={selected}
      id={buttonProps.id}
      aria-controls={`${buttonProps.id}-tab`}
    >
      {children}
    </button>
  );
};

Tab.displayName = 'Tab';

Tab.propTypes = {
  selected: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
