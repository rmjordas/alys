import React from 'react';
import PropTypes from 'prop-types';

import { COLOR_WHITE, colors } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

export default function CalendarIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, color ? colors[color] : 'currentColor'),
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 17 19" {...svgProps}>
      <path
        {...commonProps}
        id="path"
        d="M15.5,18.5H1.5a.945.945,0,0,1-1-1V3.5a.945.945,0,0,1,1-1h14a.945.945,0,0,1,1,1v14A.945.945,0,0,1,15.5,18.5Z"
      />
      <line {...commonProps} id="line" y2="4" transform="translate(3.5 0.5)" />
      <line
        {...commonProps}
        id="line-2"
        data-name="line"
        y2="4"
        transform="translate(13.5 0.5)"
      />
      <line
        {...commonProps}
        id="line-3"
        data-name="line"
        x2="16"
        transform="translate(0.5 14.5)"
      />
    </SvgIcon>
  );
}

CalendarIcon.defaultProps = {
  dark: false,
};

CalendarIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
