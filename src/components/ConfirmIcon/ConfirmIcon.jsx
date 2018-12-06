import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function ConfirmIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, color ? colors[color] : 'currentColor'),
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 21 21" {...svgProps}>
      <g id="confirm-icon" transform="translate(0 0)">
        <path {...commonProps} id="path" d="M5.6,10.9,8.7,14l7.2-7.1" />
        <circle
          {...commonProps}
          id="ellipse"
          cx="10"
          cy="10"
          r="10"
          transform="translate(0.5 0.5)"
        />
      </g>
    </SvgIcon>
  );
}

ConfirmIcon.defaultProps = {
  dark: false,
};

ConfirmIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
