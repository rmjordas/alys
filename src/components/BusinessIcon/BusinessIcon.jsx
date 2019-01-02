import React from 'react';
import PropTypes from 'prop-types';

import { COLOR_PRIMARY, COLOR_BLUE_GRAY } from '@/constants';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function BusinessIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    stroke: COLOR_PRIMARY,
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 48.366 47.814" {...svgProps}>
      <g id="business-icon">
        <path
          id="path"
          fill="#dce9ff"
          d="M39.6,22.138V5.6A4.551,4.551,0,0,0,35,1H5.6A4.551,4.551,0,0,0,1,5.6V35a4.551,4.551,0,0,0,4.6,4.6H21.678l-2.941-8.363,2.941-7.628,5.79-4.228H33.9l5.7,2.757"
        />
        <path
          id="path-2"
          data-name="path"
          fill={COLOR_PRIMARY}
          d="M30.9,22.251l3.309-.551,3.217.46V35.945l-6.433-.092Z"
          transform="translate(-2.421 -1.676)"
        />
        <path
          {...commonProps}
          id="path-3"
          data-name="path"
          fill={COLOR_BLUE_GRAY}
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.176,36.638H19.338A1.843,1.843,0,0,1,17.5,34.8V17.338A1.843,1.843,0,0,1,19.338,15.5h3.676a1.843,1.843,0,0,1,1.838,1.838V24.69"
          transform="translate(-1.336 -1.174)"
        />
        <path
          {...commonProps}
          id="path-4"
          data-name="path"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2px"
          d="M22,36.947h.919a1.843,1.843,0,0,0,1.838-1.838V25"
          transform="translate(-1.7 -1.943)"
        />
        <path
          id="path-5"
          data-name="path"
          fill={COLOR_PRIMARY}
          d="M20.743,36.866H24.6V24l-2.481,2.665-1.47,3.217L20.1,34.569Z"
          transform="translate(-1.547 -1.862)"
        />
        <path
          {...commonProps}
          id="path-6"
          data-name="path"
          fill={COLOR_BLUE_GRAY}
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.106,37.366H7.246A1.745,1.745,0,0,1,5.5,35.62V26.246A1.745,1.745,0,0,1,7.246,24.5h3.768a1.745,1.745,0,0,1,1.746,1.746v9.282A1.7,1.7,0,0,1,11.106,37.366Z"
          transform="translate(-0.364 -1.903)"
        />
        <path
          {...commonProps}
          id="path-7"
          data-name="path"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2px"
          d="M37.433,22V34.866A1.843,1.843,0,0,1,35.6,36.7H32.838A1.843,1.843,0,0,1,31,34.866V22"
          transform="translate(-2.429 -1.7)"
        />
        <path
          {...commonProps}
          id="path-8"
          data-name="path"
          fill={COLOR_BLUE_GRAY}
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M30.5,20.2V7.338A1.843,1.843,0,0,1,32.338,5.5h3.676a1.843,1.843,0,0,1,1.838,1.838V19.285"
          transform="translate(-2.389 -0.364)"
        />
        <path
          {...commonProps}
          id="ellipse"
          stroke-linecap="round"
          d="M44.534,34.6A9.845,9.845,0,0,1,34.7,44.434"
          transform="translate(-2.729 -2.721)"
        />
        <circle
          {...commonProps}
          id="ellipse-2"
          data-name="ellipse"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2px"
          cx="12.407"
          cy="12.407"
          r="12.407"
          transform="translate(19.381 19.381)"
        />
        <line
          {...commonProps}
          id="line"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2px"
          x2="5.514"
          y2="5.514"
          transform="translate(41.437 40.886)"
        />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          stroke-linecap="round"
          x2="2.757"
          transform="translate(7.433 24.435)"
        />
        <line
          {...commonProps}
          id="line-3"
          data-name="line"
          stroke-linecap="round"
          x2="2.757"
          transform="translate(18.462 16.164)"
        />
        <line
          {...commonProps}
          id="line-4"
          data-name="line"
          stroke-linecap="round"
          x2="2.757"
          transform="translate(30.409 6.974)"
        />
        <path
          {...commonProps}
          id="path-9"
          data-name="path"
          fill="none"
          stroke-linejoin="round"
          stroke-width="2px"
          d="M21.678,39.6H5.6A4.551,4.551,0,0,1,1,35V5.6A4.551,4.551,0,0,1,5.6,1H35a4.551,4.551,0,0,1,4.6,4.6V22.138"
        />
      </g>
    </SvgIcon>
  );
}

BusinessIcon.defaultProps = {
  dark: false,
};

BusinessIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
