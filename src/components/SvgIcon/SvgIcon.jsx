import React from 'react';
import PropTypes from 'prop-types';

import { styleLengths } from '@utils/string-utils';

/** Renders SVG paths. */
export default function SvgIcon({ fontSize, children }) {
  return (
    <svg
      color="inherit"
      viewBox="0 0 24 24"
      focusable={false}
      width={styleLengths(fontSize)}
      height={styleLengths(fontSize)}
    >
      {children}
    </svg>
  );
}

const DEFAULT_FONT_SIZE = 24;

SvgIcon.defaultProps = {
  fontSize: DEFAULT_FONT_SIZE,
};

SvgIcon.propTypes = {
  /** SVG paths to render */
  children: PropTypes.node.isRequired,

  /** Size of the icon */
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
