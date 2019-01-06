import React from 'react';
import PropTypes from 'prop-types';

import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_FILL,
  COLOR_BLUE_GRAY,
  COLOR_WHITE,
} from '@/constants';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function MarketingIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 51.2 51" {...svgProps}>
      <g id="marketing-icon">
        <circle
          {...commonProps}
          id="ellipse"
          fill={COLOR_BLUE_GRAY}
          stroke={COLOR_PRIMARY}
          stroke-width="2px"
          cx="22"
          cy="22"
          r="22"
          transform="translate(1 6)"
        />
        <circle
          id="ellipse-2"
          data-name="ellipse"
          fill={COLOR_WHITE}
          cx="14.5"
          cy="14.5"
          r="14.5"
          transform="translate(8.5 13.5)"
        />
        <circle
          id="ellipse-3"
          data-name="ellipse"
          fill={COLOR_PRIMARY_FILL}
          cx="14.5"
          cy="14.5"
          r="14.5"
          transform="translate(8.5 13.5)"
        />
        <circle
          {...commonProps}
          id="ellipse-4"
          data-name="ellipse"
          stroke={COLOR_PRIMARY}
          fill="none"
          cx="14.5"
          cy="14.5"
          r="14.5"
          transform="translate(8.5 13.5)"
        />
        <circle
          {...commonProps}
          id="ellipse-5"
          data-name="ellipse"
          fill={COLOR_WHITE}
          stroke={COLOR_PRIMARY}
          stroke-width="2px"
          cx="7"
          cy="7"
          r="7"
          transform="translate(16 21)"
        />
        <line
          {...commonProps}
          id="line"
          fill="none"
          stroke={COLOR_WHITE}
          stroke-width="3px"
          x1="19.8"
          y2="19.8"
          transform="translate(22.9 8.8)"
        />
        <path
          {...commonProps}
          id="path"
          stroke={COLOR_PRIMARY}
          fill="none"
          d="M46.7,8.8l-4.2.1V4.5"
        />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          stroke={COLOR_PRIMARY}
          fill="none"
          d="M48.7,6.6l-4.2.1V2.5"
        />
        <path
          {...commonProps}
          id="path-3"
          data-name="path"
          stroke={COLOR_PRIMARY}
          fill="none"
          d="M50.7,4.5l-4.2.1V.5"
        />
        <path
          {...commonProps}
          id="path-4"
          data-name="path"
          stroke={COLOR_PRIMARY}
          fill="none"
          d="M22.9,28.6"
        />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          stroke={COLOR_PRIMARY}
          fill="none"
          x1="19.8"
          y2="19.8"
          transform="translate(22.9 8.8)"
        />
      </g>
    </SvgIcon>
  );
}

MarketingIcon.defaultProps = {
  dark: false,
};

MarketingIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
