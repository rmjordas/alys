/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { Tab } from './tab';

export const TabList = forwardRef(({ selectOption, label, list, ...divProps }, ref) => {
  const theme = useTheme().default;

  return (
    <div
      css={{
        fontWeight: theme.typography.weight.medium,
        boxShadow: `${theme.color.subtle} 0 -0.0625em 0 0 inset`,
      }}
      {...divProps}
      ref={ref}
      role="tablist"
      aria-label={label}
    >
      {list.map(({ label: tabLabel, ...v }) => (
        <Tab key={v.id} {...v} onClick={v.disabled ? undefined : selectOption(v.id)}>
          {tabLabel}
        </Tab>
      ))}
    </div>
  );
});

TabList.displayName = 'TabList';

TabList.propTypes = {
  selectOption: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
