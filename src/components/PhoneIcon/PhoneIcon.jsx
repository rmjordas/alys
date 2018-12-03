import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

const isDark = (dark) => (dark ? '#fff' : '#4C5264');

/** See <SvgIcon /> for more prop descriptions. */
export default function PhoneIcon({ dark, ...svgProps }) {
  return (
    <SvgIcon {...svgProps}>
      <g id="phone-icon" transform="translate(0 0)">
        <path
          id="path"
          fill="none"
          stroke={isDark(dark)}
          strokeMiterlimit="10"
          d="M11.5,21.5H1.5a.945.945,0,0,1-1-1V1.5a.945.945,0,0,1,1-1h10a.945.945,0,0,1,1,1v19A.945.945,0,0,1,11.5,21.5Z"
        />
        <line
          id="line"
          fill="none"
          stroke={isDark(dark)}
          strokeMiterlimit="10"
          x2="12"
          transform="translate(1 4.5)"
        />
        <line
          id="line-2"
          data-name="line"
          fill="none"
          stroke={isDark(dark)}
          strokeMiterlimit="10"
          strokeLineCap="round"
          x2="2"
          transform="translate(5.5 2.5)"
        />
        <circle
          id="ellipse"
          fill="none"
          stroke={isDark(dark)}
          strokeMiterlimit="10"
          cx="0.5"
          cy="0.5"
          r="0.5"
          transform="translate(6 18.5)"
        />
      </g>
    </SvgIcon>
  );
}

PhoneIcon.defaultProps = {
  dark: false,
};

PhoneIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
