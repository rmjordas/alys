import React from 'react';
import PropTypes from 'prop-types';

import { styleLengths } from '@utils/string-utils';

/** SVG eye icon. */
export default function EyeIcon({ fill, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={styleLengths(width)}
      height={styleLengths(height)}
      viewBox="0 0 22 22"
    >
      <g
        transform="matrix(.02146 0 0 .02146 1 1)"
        fill={fill === 'default' ? '#4d4d4d' : fill}
      >
        <path d="m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1" />
        <circle cx="466.08" cy="466.02" r="134.5" />
      </g>
    </svg>
  );
}

const FILL_DEFAULT = 'default';
const DEFAULT_LENGTH = '1em';
const stringOrNumberProp = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);
export const eyeIconColorEnum = PropTypes.oneOf([FILL_DEFAULT]);

EyeIcon.defaultProps = {
  fill: FILL_DEFAULT,
  width: DEFAULT_LENGTH,
  height: DEFAULT_LENGTH,
};

EyeIcon.propTypes = {
  /** Fill color */
  fill: PropTypes.oneOfType([PropTypes.string, eyeIconColorEnum]),

  /** Icon width */
  width: stringOrNumberProp,

  /** Icon height */
  height: stringOrNumberProp,
};
