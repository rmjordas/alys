/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core';
import PropTypes from 'prop-types';
import { useState, useEffect, forwardRef } from 'react';

const fadein = keyframes`
  from { bottom: 0; opacity: 0; }
  to { bottom: 30; opacity: 1;}
`;

const fadeout = keyframes`
  from { bottom: 30; opacity: 1; }
  to { bottom: 0; opacity: 0; }
`;

export const Fade = forwardRef(({ show, children, ...wrapperProps }, ref) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
    }
  }, [show]);

  const animateEnd = () => {
    if (!show) {
      setRender(false);
    }
  };

  return render ? (
    <div
      css={{
        animation: show ? `${fadein} 0.5s` : `${fadeout} 0.5s`,
      }}
      {...wrapperProps}
      ref={ref}
      onAnimationEnd={animateEnd}
    >
      {children}
    </div>
  ) : null;
});

Fade.displayName = 'Fade';

Fade.defaultProps = {
  show: true,
};

Fade.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
