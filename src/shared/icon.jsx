/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

export const Icon = ({ block, children, ...svgProps }) => {
  return (
    <svg
      css={{
        display: block ? 'block' : 'inline-block',
        verticalAlign: 'middle',
        shapeRendering: 'inherit',
        transform: 'translate3d(0, 0, 0)',
      }}
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...svgProps}
    >
      {children}
    </svg>
  );
};

Icon.defaultProps = {
  block: false,
};

Icon.propTypes = {
  /**
   * If `true`, this will assign a the value `block` to the `<svg>`'s `display` CSS rule. Defaults
   * to false (i.e. `display` is `inline-block`).
   */
  block: PropTypes.bool,
  /** Any child node that can be placed inside an `<svg>` element.  */
  children: PropTypes.node,
};
