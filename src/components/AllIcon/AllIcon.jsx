import React from 'react';
import PropTypes from 'prop-types';

import { COLOR_PRIMARY, COLOR_PRIMARY_FILL } from '@/constants';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function AllIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: COLOR_PRIMARY_FILL,
    stroke: COLOR_PRIMARY,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
    strokeWidth: '2px',
  };

  return (
    <SvgIcon viewBox="0 0 43.1 43" {...svgProps}>
      <g id="all-icon" class="cls-1">
        <path
          {...commonProps}
          id="path"
          d="M7.8,10H3.2A2.22,2.22,0,0,1,1,7.8V3.2A2.22,2.22,0,0,1,3.2,1H7.9A2.2,2.2,0,0,1,10,3.2V7.9A2.2,2.2,0,0,1,7.8,10Z"
        />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          d="M23.8,10H19.1A2.2,2.2,0,0,1,17,7.8V3.2A2.22,2.22,0,0,1,19.2,1h4.7A2.2,2.2,0,0,1,26,3.2V7.9A2.2,2.2,0,0,1,23.8,10Z"
        />
        <path
          {...commonProps}
          id="path-3"
          data-name="path"
          d="M39.8,10H35.1A2.2,2.2,0,0,1,33,7.8V3.2A2.22,2.22,0,0,1,35.2,1h4.7A2.2,2.2,0,0,1,42,3.2V7.9A2.2,2.2,0,0,1,39.8,10Z"
        />
        <path
          {...commonProps}
          id="path-4"
          data-name="path"
          d="M7.8,26H3.2A2.22,2.22,0,0,1,1,23.8V19.1A2.2,2.2,0,0,1,3.2,17H7.9A2.2,2.2,0,0,1,10,19.2v4.7A2.2,2.2,0,0,1,7.8,26Z"
        />
        <path
          {...commonProps}
          id="path-5"
          data-name="path"
          d="M23.8,26H19.1A2.2,2.2,0,0,1,17,23.8V19.1a2.22,2.22,0,0,1,2.2-2.2h4.7a2.22,2.22,0,0,1,2.2,2.2v4.7A2.38,2.38,0,0,1,23.8,26Z"
        />
        <path
          {...commonProps}
          id="path-6"
          data-name="path"
          d="M39.8,26H35.1A2.2,2.2,0,0,1,33,23.8V19.1a2.22,2.22,0,0,1,2.2-2.2h4.7a2.22,2.22,0,0,1,2.2,2.2v4.7A2.38,2.38,0,0,1,39.8,26Z"
        />
        <path
          {...commonProps}
          id="path-7"
          data-name="path"
          d="M7.8,42H3.2A2.22,2.22,0,0,1,1,39.8V35.1A2.2,2.2,0,0,1,3.2,33H7.9A2.2,2.2,0,0,1,10,35.2v4.7A2.2,2.2,0,0,1,7.8,42Z"
        />
        <path
          {...commonProps}
          id="path-8"
          data-name="path"
          d="M23.8,42H19.1A2.2,2.2,0,0,1,17,39.8V35.1a2.22,2.22,0,0,1,2.2-2.2h4.7a2.22,2.22,0,0,1,2.2,2.2v4.7A2.38,2.38,0,0,1,23.8,42Z"
        />
        <path
          {...commonProps}
          id="path-9"
          data-name="path"
          d="M39.8,42H35.1A2.2,2.2,0,0,1,33,39.8V35.1a2.22,2.22,0,0,1,2.2-2.2h4.7a2.22,2.22,0,0,1,2.2,2.2v4.7A2.38,2.38,0,0,1,39.8,42Z"
        />
      </g>
    </SvgIcon>
  );
}

AllIcon.defaultProps = {
  dark: false,
};

AllIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
