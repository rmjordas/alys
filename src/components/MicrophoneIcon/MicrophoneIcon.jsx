import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function MicrophoneIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 11.8 19.9" {...svgProps}>
      <g id="microphone-icon" transform="translate(0 0)">
        <path
          {...commonProps}
          id="path"
          d="M5.9,13.3h0A3.543,3.543,0,0,1,2.4,9.8V4A3.543,3.543,0,0,1,5.9.5h0A3.543,3.543,0,0,1,9.4,4V9.8A3.418,3.418,0,0,1,5.9,13.3Z"
        />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          d="M.5,7.8v2a5.378,5.378,0,0,0,5.4,5.4h0a5.378,5.378,0,0,0,5.4-5.4v-2"
        />
        <line
          {...commonProps}
          id="line"
          y2="4"
          transform="translate(5.9 15.4)"
        />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          x1="6"
          transform="translate(2.9 19.4)"
        />
      </g>
    </SvgIcon>
  );
}

MicrophoneIcon.defaultProps = { dark: false };

MicrophoneIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
