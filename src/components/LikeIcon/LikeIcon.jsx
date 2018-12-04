import React from 'react';
import PropTypes from 'prop-types';

import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function LikeIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark),
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 21.552 18.875" {...svgProps}>
      <g id="like-icon" transform="translate(0.022 0)">
        <path
          {...commonProps}
          id="path"
          strokeLinejoin="round"
          d="M10.8,18.3h0C25.5,11.4,20,3.1,20,3.1A5.381,5.381,0,0,0,15.4.5a5.553,5.553,0,0,0-4.7,2.6A5.255,5.255,0,0,0,6.1.5,5.172,5.172,0,0,0,1.5,3.1S-4,11.4,10.8,18.3C10.7,18.4,10.8,18.4,10.8,18.3Z"
        />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          strokeLinecap="round"
          d="M15.4,2.6a3.159,3.159,0,0,1,3.2,3.2"
        />
      </g>
    </SvgIcon>
  );
}

LikeIcon.defaultProps = { dark: false };

LikeIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
