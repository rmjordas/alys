import React from 'react';
import PropTypes from 'prop-types';

import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function MentorIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark),
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 21.7 19.4" {...svgProps}>
      <g id="mentor-icon" transform="translate(0 0)">
        <path {...commonProps} id="path" d="M10.3,13.6v3l-5,2.3" />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          d="M16.1,13.6v3l5.1,2.3"
        />
        <path
          {...commonProps}
          id="path-3"
          data-name="path"
          d="M15,14.1a5.2,5.2,0,0,0,3.5-4.9V4.6A4.055,4.055,0,0,0,14.4.5H12.2A4.14,4.14,0,0,0,8,4.6V9.2a5.2,5.2,0,0,0,3.5,4.9"
        />
        <path
          {...commonProps}
          id="path-4"
          data-name="path"
          d="M4.6,11.3v2.4L.5,15.6"
        />
        <path
          {...commonProps}
          id="path-5"
          data-name="path"
          d="M6.9.5H6.1A3.372,3.372,0,0,0,2.7,3.9V7.6a4.249,4.249,0,0,0,2.8,4"
        />
      </g>
    </SvgIcon>
  );
}

MentorIcon.defaultProps = { dark: false };

MentorIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
