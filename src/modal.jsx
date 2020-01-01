import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { forwardRef, useRef, useEffect } from 'react';

export const Modal = forwardRef(({ children }, ref) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot) {
      return;
    }

    if (elRef.current) {
      modalRoot.appendChild(elRef.current);
    }

    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(children, elRef.current);
});

Modal.displayName = 'Modal';

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
