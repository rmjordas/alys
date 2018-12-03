import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function CardIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 19 14" {...svgProps}>
      <g id="card-icon" transform="translate(0 0)">
        <path
          {...commonProps}
          id="path"
          strokeLinecap="round"
          d="M17.5,13.5H1.5a.945.945,0,0,1-1-1V1.5a.945.945,0,0,1,1-1h16a.945.945,0,0,1,1,1v11A.945.945,0,0,1,17.5,13.5Z"
        />
        <line
          {...commonProps}
          id="line"
          strokeWidth="3px"
          x2="18"
          transform="translate(1 5.5)"
        />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          strokeLinecap="round"
          x2="4"
          transform="translate(3.5 10.5)"
        />
      </g>
    </SvgIcon>
  );
}

CardIcon.defaultProps = { dark: false };

CardIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
