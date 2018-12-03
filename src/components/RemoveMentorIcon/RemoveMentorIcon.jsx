import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function RemoveMentorIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 23.7 23.5" {...svgProps}>
      <g id="remove-mentor-icon" transform="translate(0 0)">
        <path id="path" {...commonProps} d="M5.5,13.6v3l-5,2.3" />
        <path id="path-2" data-name="path" {...commonProps} d="M13.4,17.5" />
        <path id="path-3" data-name="path" {...commonProps} d="M13.1,17.4" />
        <path
          {...commonProps}
          id="path-4"
          data-name="path"
          d="M11.3,13.6v3l1.8.8"
        />
        <path
          {...commonProps}
          id="path-5"
          data-name="path"
          d="M10.2,14.1a5.2,5.2,0,0,0,3.5-4.9V4.6A4.055,4.055,0,0,0,9.6.5H7.3A4.055,4.055,0,0,0,3.2,4.6V9.2a5.2,5.2,0,0,0,3.5,4.9"
        />
        <circle
          {...commonProps}
          id="ellipse"
          cx="5"
          cy="5"
          r="5"
          transform="translate(13.2 13)"
        />
        <line
          {...commonProps}
          id="line"
          x1="3.4"
          y2="3.4"
          transform="translate(16.5 16.3)"
        />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          x1="3.4"
          y1="3.4"
          transform="translate(16.5 16.3)"
        />
      </g>
    </SvgIcon>
  );
}

RemoveMentorIcon.defaultProps = {
  dark: false,
};

RemoveMentorIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
