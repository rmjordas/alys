import React from 'react';
import PropTypes from 'prop-types';

import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_FILL,
  COLOR_BLUE_GRAY,
} from '@/constants';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function DevelopmentIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 50.877 38" {...svgProps}>
      <g id="development-icon" transform="translate(0.018)">
        <rect
          id="rectangle"
          fill={COLOR_BLUE_GRAY}
          width="21"
          height="25"
          transform="translate(25.1 1)"
        />
        <path
          {...commonProps}
          id="path"
          fill="none"
          stroke={COLOR_PRIMARY}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M32.2,10.9l-2.8,2.8,2.8,2.9"
        />
        <path
          id="path-2"
          {...commonProps}
          data-name="path"
          fill="none"
          stroke={COLOR_PRIMARY}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M38.1,16.6l2.8-2.9-2.8-2.8"
        />
        <line
          {...commonProps}
          id="line"
          fill="none"
          stroke={COLOR_PRIMARY}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="1.9"
          y2="7.2"
          transform="translate(34.2 10.1)"
        />
        <path
          {...commonProps}
          id="path-3"
          data-name="path"
          fill="none"
          stroke={COLOR_PRIMARY}
          strokeWidth="2px"
          d="M46.2,26H4.2V2.9A1.967,1.967,0,0,1,6.1,1H44.3a1.9,1.9,0,0,1,1.9,1.9Z"
        />
        <path
          {...commonProps}
          id="path-4"
          data-name="path"
          fill={COLOR_PRIMARY_FILL}
          stroke={COLOR_PRIMARY}
          strokeWidth="2px"
          d="M46.3,26H4.5L1.1,34.5A1.854,1.854,0,0,0,2.8,37H48a1.814,1.814,0,0,0,1.7-2.5Z"
        />
        <path
          {...commonProps}
          id="path-5"
          data-name="path"
          fill={COLOR_BLUE_GRAY}
          stroke={COLOR_PRIMARY}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M30,33.5H20.9a.846.846,0,0,1-.8-1l.7-2.4a.871.871,0,0,1,.8-.6h7.6a.76.76,0,0,1,.8.6l.7,2.4A.739.739,0,0,1,30,33.5Z"
        />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={COLOR_BLUE_GRAY}
          x2="15"
          transform="translate(7.7 4.5)"
        />
        <line
          {...commonProps}
          id="line-3"
          data-name="line"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={COLOR_BLUE_GRAY}
          x2="12"
          transform="translate(7.7 6.5)"
        />
        <line
          {...commonProps}
          id="line-4"
          data-name="line"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={COLOR_BLUE_GRAY}
          x2="9"
          transform="translate(7.7 8.5)"
        />
        <line
          {...commonProps}
          id="line-5"
          data-name="line"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={COLOR_BLUE_GRAY}
          x2="13"
          transform="translate(7.7 10.5)"
        />
        <line
          {...commonProps}
          id="line-6"
          data-name="line"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={COLOR_BLUE_GRAY}
          x2="12"
          transform="translate(7.7 12.5)"
        />
        <line
          {...commonProps}
          id="line-7"
          data-name="line"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={COLOR_BLUE_GRAY}
          x2="15"
          transform="translate(7.7 14.5)"
        />
        <line
          {...commonProps}
          id="line-8"
          data-name="line"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={COLOR_BLUE_GRAY}
          x2="9"
          transform="translate(7.7 16.5)"
        />
        <line
          {...commonProps}
          id="line-9"
          data-name="line"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={COLOR_BLUE_GRAY}
          x2="13"
          transform="translate(7.7 18.5)"
        />
        <line
          {...commonProps}
          id="line-10"
          data-name="line"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={COLOR_BLUE_GRAY}
          x2="12"
          transform="translate(7.7 20.5)"
        />
        <line
          {...commonProps}
          id="line-11"
          data-name="line"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={COLOR_BLUE_GRAY}
          x2="15"
          transform="translate(7.7 22.5)"
        />
      </g>
    </SvgIcon>
  );
}

DevelopmentIcon.defaultProps = {
  dark: false,
};

DevelopmentIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
