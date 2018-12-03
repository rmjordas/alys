import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function PasswordIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon {...svgProps}>
      <g id="password-icon" transform="translate(0 -0.011)">
        <path
          {...commonProps}
          strokeLinecap="round"
          id="path"
          d="M15.5,19.5H1.5a.945.945,0,0,1-1-1V7.5a.945.945,0,0,1,1-1h14a.945.945,0,0,1,1,1v11A.945.945,0,0,1,15.5,19.5Z"
        />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          strokeLinejoin="round"
          d="M4.5,7V4.7A4.179,4.179,0,0,1,7.7.6a3.957,3.957,0,0,1,4.8,3.9V7"
        />
        <path
          {...commonProps}
          id="path-3"
          data-name="path"
          strokeLinecap="round"
          d="M10.2,11.9a1.685,1.685,0,0,0-1.7-1.7,1.628,1.628,0,0,0-1.7,1.7,1.709,1.709,0,0,0,.7,1.3v1.6a.945.945,0,0,0,1,1,.945.945,0,0,0,1-1V13.2A1.709,1.709,0,0,0,10.2,11.9Z"
        />
      </g>
    </SvgIcon>
  );
}

PasswordIcon.defaultProps = { dark: false };

PasswordIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
