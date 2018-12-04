import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function CameraIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, colors[color]),
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 18 14" {...svgProps}>
      <circle
        {...commonProps}
        id="ellipse"
        cx="3.5"
        cy="3.5"
        r="3.5"
        transform="translate(5.5 4.5)"
      />
      <circle
        {...commonProps}
        id="ellipse-2"
        data-name="ellipse"
        cx="0.5"
        cy="0.5"
        r="0.5"
        transform="translate(14.5 4.5)"
      />
      <path
        {...commonProps}
        id="path"
        d="M16.4,2.5H13.1l-.4-1.3a.961.961,0,0,0-.9-.7H6.2a.961.961,0,0,0-.9.7L4.8,2.5H1.6A1.11,1.11,0,0,0,.5,3.6v8.8a1.11,1.11,0,0,0,1.1,1.1H16.4a1.11,1.11,0,0,0,1.1-1.1V3.6A1.11,1.11,0,0,0,16.4,2.5Z"
      />
    </SvgIcon>
  );
}

CameraIcon.defaultProps = {
  dark: false,
  color: 'dark',
};

CameraIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
