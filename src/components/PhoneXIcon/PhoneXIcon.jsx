import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function PhoneXIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 13 22" {...svgProps}>
      <g id="phone-x-icon" transform="translate(0 0)">
        <path
          {...commonProps}
          id="path"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.5,1.5H8a.908.908,0,0,0,.7-.3L9.4.5H3.6l.7.7a.908.908,0,0,0,.7.3Z"
        />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          d="M11.5,21.5H1.5a.945.945,0,0,1-1-1V1.5a.945.945,0,0,1,1-1h10a.945.945,0,0,1,1,1v19A.945.945,0,0,1,11.5,21.5Z"
        />
      </g>
    </SvgIcon>
  );
}

PhoneXIcon.defaultProps = { dark: false };

PhoneXIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
