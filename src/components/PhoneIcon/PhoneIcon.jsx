import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function PhoneIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, colors[color]),
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 13 22" {...svgProps}>
      <g id="phone-icon" transform="translate(0 0)">
        <path
          {...commonProps}
          id="path"
          d="M11.5,21.5H1.5a.945.945,0,0,1-1-1V1.5a.945.945,0,0,1,1-1h10a.945.945,0,0,1,1,1v19A.945.945,0,0,1,11.5,21.5Z"
        />
        <line {...commonProps} id="line" x2="12" transform="translate(1 4.5)" />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          strokeLinecap="round"
          x2="2"
          transform="translate(5.5 2.5)"
        />
        <circle
          {...commonProps}
          id="ellipse"
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
  color: 'dark',
};

PhoneIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};