/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useReducer } from 'react';

import { Tag } from '../tag';

const initialState = {
  tags: [
    {
      title: 'ES2015',
      color: 'warning',
      disabled: true,
    },
    {
      title: 'React',
      color: 'primary',
    },
    {
      title: 'Angular',
      color: 'danger',
    },
    {
      title: 'Vue',
      color: 'success',
    },
  ],
  isChanged: false,
};

const TAG_DESTROY = 'TAG_DESTROY';
const STATE_RESET = 'STATE_RESET';

function reducer(state, action) {
  switch (action.type) {
    case TAG_DESTROY:
      return {
        ...state,
        isChanged: true,
        tags: state.tags.filter(({ title }) => title !== action.payload),
      };
    case STATE_RESET:
      return { ...initialState };
    default:
      throw new Error('unknown action type');
  }
}

export const TagExample = () => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  const close = (title) => () => dispatch({ type: TAG_DESTROY, payload: title });

  const click = () => dispatch({ type: STATE_RESET });

  return (
    <Fragment>
      {state.tags.map(({ title, ...tagProps }) => (
        <Tag key={title} {...tagProps} onClose={close(title)}>
          {title}
        </Tag>
      ))}

      <button disabled={!state.isChanged} onClick={state.isChanged ? click : undefined}>
        Reset
      </button>
    </Fragment>
  );
};
