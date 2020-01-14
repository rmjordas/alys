/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import { forwardRef, useCallback, useEffect, useReducer, useMemo } from 'react';

import { TabList } from './tab-list';
import { TabPanel } from './tab-panel';

const initialState = {
  options: [],
};

const OPTIONS_PUT = 'OPTIONS_PUT';
const OPTIONS_SELECT = 'OPTIONS_SELECT';

const reducer = (state, action) => {
  switch (action.type) {
    case OPTIONS_PUT:
      return {
        ...state,
        options: action.payload.options.map((v, i) => ({ ...v, selected: i === 0 })),
      };
    case OPTIONS_SELECT:
      return {
        ...state,
        options: state.options.map((v) => ({ ...v, selected: v.id === action.payload.selected })),
      };
    default:
      throw new Error('unknown action type');
  }
};

export const Tabs = forwardRef(({ label, options, ...wrapperProps }, ref) => {
  const theme = useTheme().default;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => dispatch({ type: OPTIONS_PUT, payload: { options } }), [options]);

  const select = useCallback(
    (id) => () => dispatch({ type: OPTIONS_SELECT, payload: { selected: id } }),
    [],
  );

  const list = useMemo(
    () =>
      state.options.map(({ id, selected, label, disabled }) => ({ id, selected, label, disabled })),
    [state.options],
  );

  const selected = useMemo(() => state.options.find((v) => v.selected), [state.options]);

  return state.options.length > 0 ? (
    <div
      css={{
        fontSize: theme.typography.size.s3,
        fontFamily: theme.typography.fonts.base,
        color: theme.color.description,
        overflow: 'hidden',
      }}
      {...wrapperProps}
      ref={ref}
    >
      <TabList selectOption={select} list={list} label={label} />
      <TabPanel id={selected.id} contents={selected.contents} />
    </div>
  ) : null;
});

Tabs.displayName = 'Tabs';

Tabs.propTypes = {
  /** Used to set the aria-label for the child TabList component */
  label: PropTypes.string.isRequired,
  /** A list containing the information to be displayed for each tab */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      contents: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
};
