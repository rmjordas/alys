import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function ClockIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 20 20" {...svgProps}>
      <g id="clock-icon" transform="translate(0 0)">
        <circle
          {...commonProps}
          id="ellipse"
          cx="9.5"
          cy="9.5"
          r="9.5"
          transform="translate(0.5 0.5)"
        />
        <line
          {...commonProps}
          id="line"
          y2="8"
          transform="translate(9.5 3.5)"
        />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          x1="5"
          transform="translate(9.5 11.5)"
        />
      </g>
    </SvgIcon>
  );
}

ClockIcon.defaultProps = { dark: false };

ClockIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
