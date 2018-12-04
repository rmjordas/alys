import React from 'react';
import PropTypes from 'prop-types';

import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function HappyIcon({ dark, ...svgProps }) {
  const commonProps = {
    stroke: iconDark(dark),
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 20 20" {...svgProps}>
      <g id="happy-icon" transform="translate(0 0)">
        <circle
          {...commonProps}
          id="ellipse"
          fill="none"
          cx="9.5"
          cy="9.5"
          r="9.5"
          transform="translate(0.5 0.5)"
        />
        <circle
          {...commonProps}
          id="ellipse-2"
          data-name="ellipse"
          fill={iconDark(dark)}
          cx="0.5"
          cy="0.5"
          r="0.5"
          transform="translate(6.5 6.5)"
        />
        <circle
          {...commonProps}
          id="ellipse-3"
          data-name="ellipse"
          fill={iconDark(dark)}
          cx="0.5"
          cy="0.5"
          r="0.5"
          transform="translate(12.5 6.5)"
        />
        <path
          {...commonProps}
          id="path"
          fill="none"
          d="M6.3,13.5a4.507,4.507,0,0,0,3.7,2,4.373,4.373,0,0,0,3.7-2"
        />
      </g>
    </SvgIcon>
  );
}

HappyIcon.defaultProps = { dark: false };

HappyIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
