import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function ArrowLeftIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon {...svgProps}>
      <g id="arrow-right-icon" transform="translate(0 0)">
        <line
          {...commonProps}
          id="Line_375"
          data-name="Line 375"
          x2="17"
          transform="translate(0.5 8.6)"
        />
        <path
          {...commonProps}
          id="Path_1156"
          data-name="Path 1156"
          strokeLinejoin="round"
          d="M10.2.5l8.1,8.1-8.1,8.1"
        />
      </g>
    </SvgIcon>
  );
}

ArrowLeftIcon.defaultProps = { dark: false };

ArrowLeftIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
