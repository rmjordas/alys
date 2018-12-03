import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function RegisterIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 19.25 19.306" {...svgProps}>
      <g id="register-icon" transform="translate(0 0.105)">
        <path
          {...commonProps}
          id="path"
          strokeLinejoin="round"
          d="M4.3,17.7l-3.8,1,1-3.9L15.8.6a.483.483,0,0,1,.7,0l2.1,2.1a.483.483,0,0,1,0,.7Z"
        />
        <line
          {...commonProps}
          id="line"
          x2="2.8"
          y2="2.8"
          transform="translate(14.7 1.7)"
        />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          d="M1.8,9.4V1.9H9.3"
        />
        <path
          {...commonProps}
          id="path-3"
          data-name="path"
          d="M16.8,10.4v7.5H9.3"
        />
      </g>
    </SvgIcon>
  );
}

RegisterIcon.defaultProps = { dark: false };

RegisterIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
