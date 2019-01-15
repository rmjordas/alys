import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function PreviewIcon({ dark, color, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 20 22.498" {...svgProps}>
      <path
        id="video-icon"
        fill="none"
        stroke={iconDark(
          dark,
          COLOR_WHITE,
          color ? colors[color] : 'currentColor',
        )}
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="M18.938,10.245,2.149.652a1.1,1.1,0,0,0-1.649.9V20.888a1.051,1.051,0,0,0,1.649.9l16.789-9.594A1.124,1.124,0,0,0,18.938,10.245Z"
        transform="translate(0 0.02)"
      />
    </SvgIcon>
  );
}

PreviewIcon.defaultProps = {
  dark: false,
};

PreviewIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
