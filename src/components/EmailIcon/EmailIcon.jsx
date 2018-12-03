import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

const isDark = (dark) => (dark ? '#fff' : '#4C5264');

export default function EmailIcon({ dark, ...svgProps }) {
  return (
    <SvgIcon {...svgProps}>
      <g id="email-icon" transform="translate(0 0)">
        <path
          id="path"
          fill="none"
          stroke={isDark(dark)}
          strokeMiterlimit={10}
          d="M18.5,14.5H1.5a.945.945,0,0,1-1-1V1.5a.945.945,0,0,1,1-1h17a.945.945,0,0,1,1,1v12A.945.945,0,0,1,18.5,14.5Z"
        />
        <path
          id="path-2"
          data-name="path"
          fill="none"
          stroke={isDark(dark)}
          strokeMiterlimit={10}
          stroke-strokeLinecap="round"
          stroke-strokeLinejoin="round"
          d="M.7,1.8,9.4,7.9a1.36,1.36,0,0,0,1.5,0l8.3-6.1"
        />
      </g>
    </SvgIcon>
  );
}

EmailIcon.defaultProps = { dark: false };

EmailIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
