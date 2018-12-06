import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function ChevronRightIcon({ dark, color, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 5.8 10.7" {...svgProps}>
      <g id="arrow-right" transform="translate(-652.002 -385)">
        <path
          id="arrow-right-2"
          data-name="arrow-right"
          fill="none"
          stroke={iconDark(
            dark,
            COLOR_WHITE,
            color ? colors[color] : 'currentColor',
          )}
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

ChevronRightIcon.defaultProps = {
  dark: false,
};

ChevronRightIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
