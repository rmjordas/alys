import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function PhoneIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon {...svgProps}>
      <g id="phone-icon" transform="translate(0 0)">
        <path
          {...commonProps}
          id="path"
          d="M11.5,21.5H1.5a.945.945,0,0,1-1-1V1.5a.945.945,0,0,1,1-1h10a.945.945,0,0,1,1,1v19A.945.945,0,0,1,11.5,21.5Z"
        />
        <line {...commonProps} id="line" x2="12" transform="translate(1 4.5)" />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          strokeLineCap="round"
          x2="2"
          transform="translate(5.5 2.5)"
        />
        <circle
          {...commonProps}
          id="ellipse"
          cx="0.5"
          cy="0.5"
          r="0.5"
          transform="translate(6 18.5)"
        />
      </g>
    </SvgIcon>
  );
}

PhoneIcon.defaultProps = {
  dark: false,
};

PhoneIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
