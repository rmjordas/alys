/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const Icon = forwardRef(({ children, ...svgProps }, ref) => {
  return (
    <svg
      css={{
        verticalAlign: 'middle',
        shapeRendering: 'inherit',
        transform: 'translate3d(0, 0, 0)',
      }}
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...svgProps}
      ref={ref}
    >
      {children}
    </svg>
  );
});

Icon.displayName = 'Icon';

Icon.propTypes = {
  /**
   * Any child node that can be placed inside an `<svg>` element, e.g `<path>`, `<rect>`,
   * <circle>, etc.
   */
  children: PropTypes.node,
};
