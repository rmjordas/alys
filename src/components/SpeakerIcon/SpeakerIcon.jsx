import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function SpeakerIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 18.5 16.179" {...svgProps}>
      <g id="speaker-icon" transform="translate(0 0.016)">
        <path
          {...commonProps}
          id="path"
          d="M4.8,11.3H3.7A3.159,3.159,0,0,1,.5,8.1h0A3.159,3.159,0,0,1,3.7,4.9H4.8Z"
        />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          d="M10.6,15.4,4.8,11.2V4.9L10.6.7a1.081,1.081,0,0,1,1.7.9v13A1.045,1.045,0,0,1,10.6,15.4Z"
        />
        <path
          {...commonProps}
          id="path-3"
          data-name="path"
          d="M14.4,11a4.373,4.373,0,0,0,0-5.8"
        />
        <path
          {...commonProps}
          id="path-4"
          data-name="path"
          d="M16.2,12.9A7.492,7.492,0,0,0,18,8.1a7.492,7.492,0,0,0-1.8-4.8"
        />
      </g>
    </SvgIcon>
  );
}

SpeakerIcon.defaultProps = { dark: false };

SpeakerIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
