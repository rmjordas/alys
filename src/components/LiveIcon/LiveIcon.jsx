import React from 'react';
import PropTypes from 'prop-types';

import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function LiveIcon({ dark, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 21 21" {...svgProps}>
      <g id="live-icon" transform="translate(0 0)">
        <circle
          id="ellipse"
          fill="none"
          stroke={iconDark(dark)}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          cx="10"
          cy="10"
          r="10"
          transform="translate(0.5 0.5)"
        />
        <circle
          id="ellipse-2"
          data-name="ellipse"
          fill={iconDark(dark)}
          cx="4.5"
          cy="4.5"
          r="4.5"
          transform="translate(6 6)"
        />
      </g>
    </SvgIcon>
  );
}

LiveIcon.defaultProps = { dark: false };

LiveIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
