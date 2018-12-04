import React from 'react';
import PropTypes from 'prop-types';

import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function AttachmentIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark),
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 17.9 19.3" {...svgProps}>
      <g id="attachment-icon" transform="translate(0.05 -0.05)">
        <path
          {...commonProps}
          id="path"
          d="M9.6,3.3,1.8,11.1a4.468,4.468,0,0,0,0,6.4h0a4.468,4.468,0,0,0,6.4,0L16,9.7"
        />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          d="M7.5,15.3l8.8-8.8a3.383,3.383,0,0,0,0-4.9h0a3.383,3.383,0,0,0-4.9,0L3.2,9.7"
        />
        <path {...commonProps} id="path-3" data-name="path" d="M2.9,15" />
        <line
          {...commonProps}
          id="line"
          x1="7.1"
          y2="7.1"
          transform="translate(3.9 4.7)"
        />
        <path
          {...commonProps}
          id="path-4"
          data-name="path"
          d="M3.9,11.8a2.416,2.416,0,0,0,0,3.5,2.5,2.5,0,0,0,3.5,0"
        />
      </g>
    </SvgIcon>
  );
}

AttachmentIcon.defaultProps = { dark: false };

AttachmentIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
