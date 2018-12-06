import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function SearchIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, color ? colors[color] : 'currentColor'),
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 18.907 18.507" {...svgProps}>
      <g id="search-icon" transform="translate(0 0)">
        <circle
          {...commonProps}
          id="ellipse"
          strokeLinejoin="round"
          cx="8"
          cy="8"
          r="8"
          transform="translate(0.5 0.5)"
        />
        <line
          {...commonProps}
          id="line"
          strokeLinejoin="round"
          x2="3.5"
          y2="3.5"
          transform="translate(14.7 14.3)"
        />
        <path {...commonProps} id="path" d="M9,2.8a5.335,5.335,0,0,1,5.3,5.3" />
      </g>
    </SvgIcon>
  );
}

SearchIcon.defaultProps = {
  dark: false,
};

SearchIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
