import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function Settings({ dark, color, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 19.875 19.98" {...svgProps}>
      <path
        id="path"
        fill="none"
        stroke={iconDark(dark, COLOR_WHITE, colors[color])}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M18.7,15.7,11.1,8.1A4.638,4.638,0,0,0,11.5,6,5.549,5.549,0,0,0,6,.5a4.618,4.618,0,0,0-2.6.7L7.3,5.1,5.1,7.3,1.2,3.4A4.618,4.618,0,0,0,.5,6,5.549,5.549,0,0,0,6,11.5a5.222,5.222,0,0,0,2.1-.4l7.6,7.6a2.175,2.175,0,0,0,3,0h0A2,2,0,0,0,18.7,15.7Z"
      />
    </SvgIcon>
  );
}

Settings.defaultProps = {
  dark: false,
  color: 'dark',
};

Settings.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
