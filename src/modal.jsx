import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';

export const Modal = ({ domId = 'modal-root', children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.getElementById(domId);

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
  }, [domId]);

  return createPortal(children, elRef.current);
};

Modal.displayName = 'Modal';

Modal.propTypes = {
  /** Child component to be shown in the portal element */
  children: PropTypes.node.isRequired,
};
