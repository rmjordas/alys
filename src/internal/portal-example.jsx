/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useReducer } from 'react';

import { Portal } from '../portal';

const MODAL_SHOW = 'MODAL_SHOW';
const MODAL_DESTROY = 'MODAL_DESTROY';

const initialState = {
  showModal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case MODAL_SHOW:
      return { ...state, showModal: true };
    case MODAL_DESTROY:
      return { ...state, showModal: false };
    default:
      throw new Error('unknown action type');
  }
}

export const PortalExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = () => {
    const action = { type: state.showModal ? MODAL_DESTROY : MODAL_SHOW };

    dispatch(action);
  };

  return (
    <div>
      <button onClick={toggleModal}>Show modal</button>
      {state.showModal ? (
        <Portal domId="modal-root">
          Hello <button onClick={toggleModal}>Close modal</button>
        </Portal>
      ) : null}
    </div>
  );
};
