import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function SignOutIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 21 20.9" {...svgProps}>
      <g id="sign-out-icon" transform="translate(0 0)">
        <path {...commonProps} id="path" d="M15.5,5.3,10.7.5,5.8,5.3" />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          d="M2.8,4.1A9.4,9.4,0,0,0,.5,10.4a10,10,0,0,0,20,0,9.4,9.4,0,0,0-2.3-6.3"
        />
        <line
          {...commonProps}
          id="line"
          y2="11"
          transform="translate(10.7 0.5)"
        />
      </g>
    </SvgIcon>
  );
}

SignOutIcon.defaultProps = { dark: false };

SignOutIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
