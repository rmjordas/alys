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
export default function PhotographyIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    stroke: COLOR_PRIMARY,
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 47.347 35.839" {...svgProps}>
      <path
        id="path"
        fill={COLOR_BLUE_GRAY}
        d="M40.543,5.834H33.775l-.967-3A2.787,2.787,0,0,0,30.2,1H17.146a2.58,2.58,0,0,0-2.514,1.837l-1.064,3H3.8A2.806,2.806,0,0,0,1,8.638v23.3a2.828,2.828,0,0,0,2.8,2.9H43.54a2.806,2.806,0,0,0,2.8-2.8v-20.3A5.839,5.839,0,0,0,40.543,5.834Z"
      />
      <circle
        {...commonProps}
        id="ellipse"
        fill={COLOR_PRIMARY_FILL}
        stroke-linejoin="round"
        cx="10.635"
        cy="10.635"
        r="10.635"
        transform="translate(13.085 8.251)"
      />
      <path
        id="path-2"
        data-name="path"
        fill={COLOR_PRIMARY_FILL}
        d="M13.085,6l-11.7.387L1,9.867l11.505-.58Z"
        transform="translate(0 -0.166)"
      />
      <circle
        {...commonProps}
        id="ellipse-2"
        data-name="ellipse"
        fill={COLOR_WHITE}
        stroke-linejoin="round"
        stroke-width="2px"
        cx="8.218"
        cy="8.218"
        r="8.218"
        transform="translate(15.502 10.668)"
      />
      <circle
        {...commonProps}
        id="ellipse-3"
        data-name="ellipse"
        fill={COLOR_PRIMARY_FILL}
        stroke-linejoin="round"
        cx="1.45"
        cy="1.45"
        r="1.45"
        transform="translate(38.223 11.152)"
      />
      <path
        {...commonProps}
        id="path-3"
        data-name="path"
        fill="none"
        stroke-linejoin="round"
        stroke-width="2px"
        d="M13.569,6l-.387,1.257A3.511,3.511,0,0,1,9.8,9.867H1"
        transform="translate(0 -0.166)"
      />
      <path
        {...commonProps}
        id="path-4"
        data-name="path"
        fill="none"
        d="M24.9,13.9a5.405,5.405,0,0,1,5.414,5.414"
        transform="translate(-0.793 -0.428)"
      />
      <line
        {...commonProps}
        id="line"
        fill="none"
        stroke-linejoin="round"
        x2="44.958"
        transform="translate(1.483 32.422)"
      />
      <rect
        id="rectangle"
        fill={COLOR_PRIMARY_FILL}
        width="43.701"
        height="2.417"
        transform="translate(1.967 32.422)"
      />
      <path
        {...commonProps}
        id="path-5"
        data-name="path"
        fill="none"
        stroke-linejoin="round"
        stroke-width="2px"
        d="M40.543,5.834H33.775l-.967-3A2.787,2.787,0,0,0,30.2,1H17.146a2.58,2.58,0,0,0-2.514,1.837l-1.064,3H3.8A2.806,2.806,0,0,0,1,8.638v23.3a2.828,2.828,0,0,0,2.8,2.9H43.54a2.806,2.806,0,0,0,2.8-2.8v-20.3A5.839,5.839,0,0,0,40.543,5.834Z"
      />
    </SvgIcon>
  );
}

PhotographyIcon.defaultProps = {
  dark: false,
};

PhotographyIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
