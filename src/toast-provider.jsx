/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';

import { Portal } from './portal';
import { Toast } from './toast';
import { ToastContext } from './toast-context';
import { generateUeid } from './utils/rand-utils';

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const add = (content) => {
    const id = generateUeid();

    setToasts([...toasts, { id, content }]);
  };

  const remove = (id) => setToasts(toasts.filter((v) => v.id !== id));

  return (
    <ToastContext.Provider value={{ add, remove }}>
      {children}
      {toasts.length > 0 ? (
        <Portal domId="toast-root">
          <Fragment>
            {toasts.map((v) => (
              <Toast key={v.id} onClose={() => remove(v.id)}>
                {v.content}
              </Toast>
            ))}
          </Fragment>
        </Portal>
      ) : null}
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  /** Actual component that ToastContext's Provider wraps around */
  children: PropTypes.node.isRequired,
};
