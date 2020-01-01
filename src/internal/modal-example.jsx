/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useReducer } from 'react';

import { Modal } from '../modal';

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

export const ModalExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = () => {
    const action = { type: state.showModal ? MODAL_DESTROY : MODAL_SHOW };

    dispatch(action);
  };

  return (
    <div>
      <button onClick={toggleModal}>Show modal</button>
      {state.showModal ? (
        <Modal>
          Hello <button onClick={toggleModal}>Close modal</button>
        </Modal>
      ) : null}
    </div>
  );
};
