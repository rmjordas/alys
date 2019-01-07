import React from 'react';
import PropTypes from 'prop-types';

import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_FILL,
  COLOR_WHITE,
  COLOR_BLUE_GRAY,
} from '@/constants';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function ArtIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    stroke: COLOR_PRIMARY,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 45.882 52.012" {...svgProps}>
      <g id="art-icon">
        <path
          id="path"
          fill={COLOR_PRIMARY_FILL}
          d="M16.363,32.5h9.451L29.3,37.788H13.1Z"
          transform="translate(1.515 3.943)"
        />
        <rect
          {...commonProps}
          id="rectangle"
          fill={COLOR_WHITE}
          strokeWidth="2px"
          width="39.381"
          height="27.004"
          transform="translate(3.25 1)"
        />
        <path
          id="path-2"
          data-name="path"
          fill={COLOR_BLUE_GRAY}
          d="M21.063,26.7l4.388,6.526H16Z"
          transform="translate(1.878 3.217)"
        />
        <line
          {...commonProps}
          id="line"
          fill="none"
          strokeWidth="2px"
          x2="43.882"
          transform="translate(1 28.004)"
        />
        <line
          {...commonProps}
          id="line-2"
          fill="none"
          strokeWidth="2px"
          data-name="line"
          x1="15.19"
          y2="21.941"
          transform="translate(7.864 28.679)"
        />
        <line
          {...commonProps}
          id="line-3"
          fill="none"
          strokeWidth="2px"
          data-name="line"
          x2="15.19"
          y2="21.941"
          transform="translate(22.716 28.679)"
        />
        <line
          {...commonProps}
          id="line-4"
          data-name="line"
          fill="none"
          x2="18.003"
          transform="translate(13.94 42.069)"
        />
        <line
          {...commonProps}
          id="line-5"
          data-name="line"
          fill="none"
          x2="11.252"
          transform="translate(17.315 36.443)"
        />
        <path
          {...commonProps}
          id="path-3"
          data-name="path"
          fill="none"
          d="M3.3,17.1"
          transform="translate(0.288 2.015)"
        />
        <path
          {...commonProps}
          id="path-4"
          data-name="path"
          fill="none"
          d="M37.8,17"
          transform="translate(4.606 2.003)"
        />
        <path
          id="path-5"
          data-name="path"
          fill={COLOR_BLUE_GRAY}
          d="M41.631,17.3V26.08H3.6V17.866l2.588-.338,3.6.563a18.4,18.4,0,0,1,25.879,0Z"
          transform="translate(0.325 1.474)"
        />
        <path
          id="path-6"
          data-name="path"
          fill={COLOR_PRIMARY_FILL}
          d="M27.127,13.763a5.963,5.963,0,0,0-11.927,0h.9l4.276-.563,3.376.113Z"
          transform="translate(1.777 0.851)"
        />
        <path
          {...commonProps}
          id="path-7"
          data-name="path"
          fill="none"
          d="M9.1,18.091a18.4,18.4,0,0,1,25.879,0"
          transform="translate(1.014 1.474)"
        />
        <path
          {...commonProps}
          id="path-8"
          data-name="path"
          fill="none"
          d="M13.652,20.167A11.238,11.238,0,0,0,3.3,17.129"
          transform="translate(0.288 1.987)"
        />
        <path
          {...commonProps}
          id="path-9"
          data-name="path"
          fill="none"
          d="M38.889,17.017a11.155,11.155,0,0,0-9.789,3.15"
          transform="translate(3.517 1.986)"
        />
        <path
          {...commonProps}
          id="path-10"
          data-name="path"
          fill="none"
          d="M27.127,13.763a5.963,5.963,0,0,0-11.927,0"
          transform="translate(1.777 0.851)"
        />
        <path
          {...commonProps}
          id="path-11"
          data-name="path"
          fill="none"
          d="M41.631,16.8v8.776H3.6V17.363"
          transform="translate(0.325 1.978)"
        />
      </g>
    </SvgIcon>
  );
}

ArtIcon.defaultProps = {
  dark: false,
};

ArtIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
