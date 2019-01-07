import React from 'react';
import PropTypes from 'prop-types';

import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_FILL,
  COLOR_BLUE_GRAY,
} from '@/constants';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function MusicIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    stroke: COLOR_PRIMARY,
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 43 47.8" {...svgProps}>
      <path
        {...commonProps}
        id="path"
        fill={COLOR_PRIMARY_FILL}
        strokeLinejoin="round"
        d="M42.5,11.5l-29,6.6V13.5l29-6.6Z"
      />
      <circle
        {...commonProps}
        id="ellipse"
        fill={COLOR_BLUE_GRAY}
        strokeWidth="2px"
        strokeLinejoin="round"
        cx="6"
        cy="6"
        r="6"
        transform="translate(1 34.8)"
      />
      <path
        {...commonProps}
        id="path-2"
        data-name="path"
        fill="none"
        strokeLinejoin="round"
        strokeWidth="2px"
        d="M13,40.8V7.6L42,1V34.8"
      />
      <path
        {...commonProps}
        id="path-3"
        data-name="path"
        fill={COLOR_BLUE_GRAY}
        strokeWidth="2px"
        strokeLinejoin="round"
        d="M42,8.1,13,14.7V7.8L42,1.2Z"
      />
      <path
        {...commonProps}
        id="path-4"
        data-name="path"
        fill="none"
        d="M6.7,37.7a3.116,3.116,0,0,1,3.1,3.1"
      />
      <circle
        {...commonProps}
        id="ellipse-2"
        data-name="ellipse"
        fill={COLOR_BLUE_GRAY}
        strokeWidth="2px"
        strokeLinejoin="round"
        cx="6"
        cy="6"
        r="6"
        transform="translate(30 28.8)"
      />
      <path
        {...commonProps}
        id="path-5"
        data-name="path"
        fill="none"
        d="M35.7,31.7a3.116,3.116,0,0,1,3.1,3.1"
      />
    </SvgIcon>
  );
}

MusicIcon.defaultProps = {
  dark: false,
};

MusicIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
