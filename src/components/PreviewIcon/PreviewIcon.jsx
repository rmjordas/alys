import React from 'react';
import PropTypes from 'prop-types';

import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function PreviewIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark),
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 19 19" {...svgProps}>
      <g id="preview-icon" transform="translate(0 0)">
        <path {...commonProps} id="path" d="M.5,4.5v-3a.945.945,0,0,1,1-1h3" />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          d="M14.5.5h3a.945.945,0,0,1,1,1v3"
        />
        <path
          {...commonProps}
          id="path-3"
          data-name="path"
          d="M18.5,14.5v3a.945.945,0,0,1-1,1h-3"
        />
        <path
          {...commonProps}
          id="path-4"
          data-name="path"
          d="M4.5,18.5h-3a.945.945,0,0,1-1-1v-3"
        />
        <line
          {...commonProps}
          id="line"
          x2="6"
          transform="translate(6.5 9.5)"
        />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          y2="6"
          transform="translate(9.5 6.5)"
        />
      </g>
    </SvgIcon>
  );
}

PreviewIcon.defaultProps = { dark: false };

PreviewIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
