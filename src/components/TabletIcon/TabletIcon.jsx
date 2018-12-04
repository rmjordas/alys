import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function TabletIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, colors[color]),
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 17 22" {...svgProps}>
      <g id="tablet-icon" transform="translate(0 0)">
        <path
          {...commonProps}
          id="path"
          d="M15.5,21.5H1.5a.945.945,0,0,1-1-1V1.5a.945.945,0,0,1,1-1h14a.945.945,0,0,1,1,1v19A.945.945,0,0,1,15.5,21.5Z"
        />
        <line {...commonProps} id="line" x2="16" transform="translate(1 4.5)" />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          strokeLinecap="round"
          x2="2"
          transform="translate(7.5 2.5)"
        />
        <circle
          {...commonProps}
          id="ellipse"
          cx="0.5"
          cy="0.5"
          r="0.5"
          transform="translate(8 18.5)"
        />
      </g>
    </SvgIcon>
  );
}

TabletIcon.defaultProps = {
  dark: false,
  color: 'dark',
};

TabletIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
