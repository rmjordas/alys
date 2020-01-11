/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useCallback, useEffect, useReducer, useRef } from 'react';

import { Checkbox } from '../checkbox';

const initialState = {
  options: [
    { label: 'Java SE 6', name: 'javase6', disabled: true, checked: false },
    { label: 'Java SE 8', name: 'javase8', checked: false },
    { label: 'Java SE 11', name: 'javase11', checked: true },
    { label: 'Java SE 17', name: 'javase17', checked: false },
  ],
  ok: false,
};

const toggleAll = (options, checked) => options.map((v) => (v.disabled ? v : { ...v, checked }));

const OPTIONS_TOGGLE = 'OPTIONS_TOGGLE';
const OPTIONS_SELECT_ALL = 'OPTIONS_SELECT_ALL';
const OPTIONS_DESELECT_ALL = 'OPTIONS_DESELECT_ALL';
const OK_UPDATE = 'OK_UPDATE';

const reducer = (state, action) => {
  switch (action.type) {
    case OK_UPDATE:
      return { ...state, ok: action.payload.ok };
    case OPTIONS_TOGGLE:
      return {
        ...state,
        options: state.options.map((v) =>
          action.payload.name === v.name ? { ...v, checked: !v.checked } : v,
        ),
      };
    case OPTIONS_SELECT_ALL:
      return { ...state, options: toggleAll(state.options, true) };
    case OPTIONS_DESELECT_ALL:
      return { ...state, options: toggleAll(state.options, false) };
    default:
      throw new Error('unknown action type');
  }
};

export const CheckboxExample = () => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });
  const timerRef = useRef();

  const toggle = (e) => dispatch({ type: OPTIONS_TOGGLE, payload: { name: e.target.name } });
  const selectAll = () => dispatch({ type: OPTIONS_SELECT_ALL });
  const deselectAll = () => dispatch({ type: OPTIONS_DESELECT_ALL });
  const setOk = useCallback((ok) => () => dispatch({ type: OK_UPDATE, payload: { ok } }), []);

  useEffect(() => {
    if (state.ok) {
      timerRef.current = setTimeout(setOk(false), 2000);
    }

    return timerRef.current ? () => clearTimeout(timerRef.current) : undefined;
  }, [setOk, state.ok]);

  const notDisabled = state.options.filter((v) => !v.disabled);
  const selected = state.options.filter((v) => v.checked);

  return (
    <Fragment>
      <div>
        <div role="group" aria-labelledby="id-group-label">
          <h3 id="id-group-label">Download Java into your veins:</h3>

          {state.options.map((v) => (
            <div key={v.name}>
              <Checkbox {...v} onChange={toggle} />
            </div>
          ))}
        </div>

        <br />

        <div>
          <button disabled={selected.length === notDisabled.length} onClick={selectAll}>
            Select All
          </button>{' '}
          <button disabled={selected.length < 1} onClick={deselectAll}>
            Deselect All
          </button>{' '}
          <button
            css={{
              position: 'relative',
            }}
            disabled={selected.length < 1}
            onClick={setOk(true)}
          >
            Download
          </button>{' '}
          {state.ok ? <span css={{ position: 'absolute', paddingLeft: 10 }}>Ok!</span> : null}
        </div>

        <p>Checked:</p>
        <ul>
          {selected.length > 0 ? (
            selected.map((v) => <li key={v.name}>{v.label}</li>)
          ) : (
            <li>None selected</li>
          )}
        </ul>
      </div>
    </Fragment>
  );
};
