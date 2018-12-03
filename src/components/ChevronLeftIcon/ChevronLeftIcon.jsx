import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function ChevronLeftIcon({ dark, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 5.8 10.7" {...svgProps}>
      <g id="arrow-left" transform="translate(-512.002 -387)">
        <path
          id="arrow-left-2"
          data-name="arrow-left"
          fill="none"
          stroke={dark ? '#fff' : '#4C5264'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M5.3,10.2.5,5.3,5.3.5"
          transform="translate(512.002 387)"
        />
      </g>
    </SvgIcon>
  );
}

ChevronLeftIcon.defaultProps = { dark: false };

ChevronLeftIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
