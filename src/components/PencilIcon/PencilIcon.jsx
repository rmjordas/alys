import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function PencilIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, colors[color]),
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 19.25 19.306" {...svgProps}>
      <g id="pencil-icon" transform="translate(0 0.105)">
        <path
          {...commonProps}
          id="path"
          strokeLinejoin="round"
          d="M4.3,17.7l-3.8,1,1-3.9L15.8.6a.483.483,0,0,1,.7,0l2.1,2.1a.483.483,0,0,1,0,.7Z"
        />
        <line
          {...commonProps}
          id="line"
          x2="2.8"
          y2="2.8"
          transform="translate(14.7 1.7)"
        />
      </g>
    </SvgIcon>
  );
}

PencilIcon.defaultProps = {
  dark: false,
};

PencilIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
