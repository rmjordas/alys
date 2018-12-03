import React from 'react';
import PropTypes from 'prop-types';

import { styleLengths } from '@utils/string-utils';

/** Renders SVG paths. */
export default function SvgIcon({ fontSize, viewBox, children, ...svgProps }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      color="inherit"
      viewBox={viewBox}
      focusable={false}
      width={styleLengths(fontSize)}
      height={styleLengths(fontSize)}
      {...svgProps}
    >
      {children}
    </svg>
  );
}

const DEFAULT_FONT_SIZE = 24;

SvgIcon.defaultProps = {
  fontSize: DEFAULT_FONT_SIZE,
  viewBox: '0 0 24 24',
};

SvgIcon.propTypes = {
  /** SVG paths to render */
  children: PropTypes.node.isRequired,

  /** Size of the icon */
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  viewBox: PropTypes.string,
};