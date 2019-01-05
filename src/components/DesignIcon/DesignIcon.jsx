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
export default function DesignIcon({ dark, color, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 54 41.5" {...svgProps}>
      <g id="design-icon">
        <rect
          id="rectangle"
          fill={COLOR_BLUE_GRAY}
          width="52"
          height="17"
          transform="translate(1 1)"
        />
        <path
          id="path"
          fill={COLOR_PRIMARY_FILL}
          d="M31,22H23a2.006,2.006,0,0,0-2,2v9H33V24A2.006,2.006,0,0,0,31,22Z"
        />
        <path
          id="path-2"
          data-name="path"
          fill={COLOR_PRIMARY_FILL}
          d="M17,22H9a2.006,2.006,0,0,0-2,2v9H19V24A2.006,2.006,0,0,0,17,22Z"
        />
        <path
          id="path-3"
          data-name="path"
          fill={COLOR_PRIMARY_FILL}
          d="M45,22H37a2.006,2.006,0,0,0-2,2v9H47V24A2.006,2.006,0,0,0,45,22Z"
        />
        <path
          {...commonProps}
          id="path-4"
          data-name="path"
          fill="none"
          stroke-width="2px"
          d="M51,34H3a2.006,2.006,0,0,1-2-2V3A2.006,2.006,0,0,1,3,1H51a2.006,2.006,0,0,1,2,2V32A2.006,2.006,0,0,1,51,34Z"
        />
        <line
          {...commonProps}
          id="line"
          fill="none"
          stroke-width="2px"
          stroke-linecap="round"
          x2="21"
          transform="translate(17 12)"
        />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          fill="none"
          stroke-linecap="round"
          x2="18"
          transform="translate(18.5 14.5)"
        />
        <circle
          {...commonProps}
          id="ellipse"
          fill={COLOR_PRIMARY_FILL}
          stroke-linecap="round"
          stroke-linejoin="round"
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(25.5 5.5)"
        />
        <path
          id="path-5"
          data-name="path"
          fill={COLOR_BLUE_GRAY}
          d="M31,41H23a2.006,2.006,0,0,1-2-2V22a2.006,2.006,0,0,1,2-2h8a2.006,2.006,0,0,1,2,2V39A2.006,2.006,0,0,1,31,41Z"
        />
        <rect
          id="rectangle-2"
          data-name="rectangle"
          fill={COLOR_WHITE}
          width="12"
          height="4.6"
          transform="translate(21 36.4)"
        />
        <path
          {...commonProps}
          id="path-6"
          data-name="path"
          fill="none"
          d="M31,41H23a2.006,2.006,0,0,1-2-2V22a2.006,2.006,0,0,1,2-2h8a2.006,2.006,0,0,1,2,2V39A2.006,2.006,0,0,1,31,41Z"
        />
        <path
          {...commonProps}
          id="path-7"
          data-name="path"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M26.6,21h2a.55.55,0,0,0,.5-.3l.5-.7H24.5l.5.7a.55.55,0,0,0,.5.3Z"
        />
        <line
          {...commonProps}
          id="line-3"
          data-name="line"
          fill="none"
          stroke-width="2px"
          stroke-linecap="round"
          x2="6"
          transform="translate(24 31)"
        />
        <line
          {...commonProps}
          id="line-4"
          data-name="line"
          fill="none"
          stroke-linecap="round"
          x2="3"
          transform="translate(25.5 33.5)"
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
          transform="translate(25.5 24.5)"
        />
        <line
          {...commonProps}
          id="line-5"
          data-name="line"
          fill="none"
          stroke-width="2px"
          stroke-linecap="round"
          x1="2.2"
          y2="2.2"
          transform="translate(6.9 34.4)"
        />
        <line
          {...commonProps}
          id="line-6"
          data-name="line"
          fill="none"
          stroke-width="2px"
          stroke-linecap="round"
          x2="2.2"
          y2="2.2"
          transform="translate(44.9 34.4)"
        />
      </g>
    </SvgIcon>
  );
}

DesignIcon.defaultProps = {
  dark: false,
};

DesignIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
