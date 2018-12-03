import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function ChevronRightIcon({ dark, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 5.8 10.7" {...svgProps}>
      <g id="arrow-right" transform="translate(-652.002 -385)">
        <path
          id="arrow-right-2"
          data-name="arrow-right"
          fill="none"
          stroke={dark ? '#fff' : '#4C5264'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M.5,10.2,5.3,5.3.5.5"
          transform="translate(652.002 385)"
        />
      </g>
    </SvgIcon>
  );
}

ChevronRightIcon.defaultProps = { dark: false };

ChevronRightIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
