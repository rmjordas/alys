import React from 'react';
import PropTypes from 'prop-types';

import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_FILL,
  COLOR_BLUE_GRAY,
  COLOR_WHITE,
} from '@/constants';
import SvgIcon from '@/SvgIcon';

const commonProps = {
  stroke: COLOR_PRIMARY,
  strokeMiterlimit: 10,
};

/** See <SvgIcon /> for more prop descriptions. */
export default function VideographyIcon({ dark, color, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 58 45" {...svgProps}>
      <g id="videography-icon">
        <path
          id="path"
          {...commonProps}
          fill={COLOR_PRIMARY_FILL}
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M47.2,40.5H45.5v-20h1.7a2.263,2.263,0,0,1,2.3,2.3V38.2A2.263,2.263,0,0,1,47.2,40.5Z"
        />
        <circle
          {...commonProps}
          id="ellipse"
          fill={COLOR_BLUE_GRAY}
          stroke-linecap="round"
          stroke-linejoin="round"
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(36.5 22.5)"
        />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          fill={COLOR_BLUE_GRAY}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2px"
          d="M41.8,44H8.2A4.225,4.225,0,0,1,4,39.8V20.2A4.225,4.225,0,0,1,8.2,16H41.9a4.225,4.225,0,0,1,4.2,4.2V39.9A4.366,4.366,0,0,1,41.8,44Z"
        />
        <rect
          {...commonProps}
          id="rectangle"
          fill={COLOR_PRIMARY}
          stroke-linecap="round"
          stroke-linejoin="round"
          width="2"
          height="17"
          transform="translate(49.5 22.5)"
        />
        <path
          {...commonProps}
          id="path-3"
          data-name="path"
          fill={COLOR_BLUE_GRAY}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2px"
          d="M57,42H54.4A2.433,2.433,0,0,1,52,39.6V21.4A2.433,2.433,0,0,1,54.4,19H57Z"
        />
        <rect
          {...commonProps}
          id="rectangle-2"
          data-name="rectangle"
          fill={COLOR_WHITE}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2px"
          width="22"
          height="16"
          transform="translate(10.1 22)"
        />
        <rect
          {...commonProps}
          id="rectangle-3"
          data-name="rectangle"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          width="2"
          height="3"
          transform="translate(8.5 9.5) rotate(180)"
        />
        <path
          {...commonProps}
          id="path-4"
          data-name="path"
          fill={COLOR_PRIMARY}
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M.5,11.5H4.6A1.9,1.9,0,0,0,6.5,9.6V6.4A1.9,1.9,0,0,0,4.6,4.5H.5Z"
        />
        <rect
          {...commonProps}
          id="rectangle-4"
          data-name="rectangle"
          fill={COLOR_PRIMARY}
          width="21"
          height="3"
          transform="translate(7.5 6.5)"
        />
        <path
          {...commonProps}
          id="path-5"
          data-name="path"
          fill="none"
          stroke-linejoin="round"
          stroke-width="2px"
          d="M33.2,5.3,31.4,3.1A5.45,5.45,0,0,0,27.1,1H22a5.6,5.6,0,0,0-4.3,2.1L7.1,16"
        />
        <path
          id="path-6"
          data-name="path"
          fill={COLOR_PRIMARY}
          d="M9.9,16.6,8.3,15.4l7.3-8.8h2.5Z"
        />
        <path
          {...commonProps}
          id="path-7"
          data-name="path"
          fill={COLOR_PRIMARY}
          stroke-linejoin="round"
          stroke-width="2px"
          d="M31.2,11H48a2.946,2.946,0,0,0,3-3h0a2.946,2.946,0,0,0-3-3H31.2A2.22,2.22,0,0,0,29,7.2V8.8A2.22,2.22,0,0,0,31.2,11Z"
        />
        <line
          {...commonProps}
          id="line"
          fill={COLOR_BLUE_GRAY}
          stroke-linejoin="round"
          y2="7"
          transform="translate(4.5 5)"
        />
        <circle
          {...commonProps}
          id="ellipse-2"
          data-name="ellipse"
          fill={COLOR_PRIMARY_FILL}
          stroke-linecap="round"
          stroke-linejoin="round"
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(37.6 21.5)"
        />
        <circle
          {...commonProps}
          id="ellipse-3"
          data-name="ellipse"
          fill={COLOR_PRIMARY_FILL}
          stroke-linecap="round"
          stroke-linejoin="round"
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(37.6 28.5)"
        />
        <circle
          {...commonProps}
          id="ellipse-4"
          data-name="ellipse"
          fill={COLOR_PRIMARY_FILL}
          stroke-linecap="round"
          stroke-linejoin="round"
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(37.6 35.5)"
        />
      </g>
    </SvgIcon>
  );
}

VideographyIcon.defaultProps = {
  dark: false,
};

VideographyIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
