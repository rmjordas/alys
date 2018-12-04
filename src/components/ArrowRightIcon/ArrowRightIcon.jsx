import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function ArrowLeftIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, colors[color]),
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 18.8 17.2" {...svgProps}>
      <g id="arrow-right-icon" transform="translate(0 0)">
        <line
          {...commonProps}
          id="Line_375"
          data-name="Line 375"
          x2="17"
          transform="translate(0.5 8.6)"
        />
        <path
          {...commonProps}
          id="Path_1156"
          data-name="Path 1156"
          strokeLinejoin="round"
          d="M10.2.5l8.1,8.1-8.1,8.1"
        />
      </g>
    </SvgIcon>
  );
}

ArrowLeftIcon.defaultProps = {
  dark: false,
  color: 'dark',
};

ArrowLeftIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
