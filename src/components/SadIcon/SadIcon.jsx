import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function SadIcon({ dark, ...svgProps }) {
  const commonProps = {
    stroke: dark ? '#fff' : '#4C5264',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 20 20" {...svgProps}>
      <g id="sad-icon" transform="translate(0 0)">
        <circle
          {...commonProps}
          id="ellipse"
          fill="none"
          cx="9.5"
          cy="9.5"
          r="9.5"
          transform="translate(0.5 0.5)"
        />
        <circle
          {...commonProps}
          id="ellipse-2"
          data-name="ellipse"
          fill={dark ? '#4C5264' : '#fff'}
          cx="0.5"
          cy="0.5"
          r="0.5"
          transform="translate(6.5 6.5)"
        />
        <circle
          {...commonProps}
          id="ellipse-3"
          data-name="ellipse"
          fill={dark ? '#4C5264' : '#fff'}
          cx="0.5"
          cy="0.5"
          r="0.5"
          transform="translate(12.5 6.5)"
        />
        <path
          {...commonProps}
          id="path"
          fill="none"
          d="M13.7,14.5a4.507,4.507,0,0,0-3.7-2,4.373,4.373,0,0,0-3.7,2"
        />
      </g>
    </SvgIcon>
  );
}

SadIcon.defaultProps = { dark: false };

SadIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
