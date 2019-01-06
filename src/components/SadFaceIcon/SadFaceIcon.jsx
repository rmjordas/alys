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
export default function SadFaceIcon({ dark, color, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 116.8 116.8" {...svgProps}>
      <circle
        id="Ellipse_455"
        data-name="Ellipse 455"
        fill={COLOR_PRIMARY_FILL}
        cx="58.4"
        cy="58.4"
        r="58.4"
        transform="translate(0 0)"
      />
      <g id="Group_1503-2" data-name="Group 1503">
        <path
          id="Path_1230"
          data-name="Path 1230"
          fill={COLOR_PRIMARY}
          d="M71.2,91.4a30.911,30.911,0,0,0-6.5-2.5,23.774,23.774,0,0,0-12.6.1,36.7,36.7,0,0,0-6.4,2.5h-.1a1.528,1.528,0,0,1-2.1-.7,1.7,1.7,0,0,1,0-1.4,15.337,15.337,0,0,1,6.2-5.9,18.66,18.66,0,0,1,17.2,0,15.337,15.337,0,0,1,6.2,5.9,1.489,1.489,0,0,1-.6,2,1.051,1.051,0,0,1-1.3,0Z"
        />
      </g>
      <circle
        id="Ellipse_456"
        data-name="Ellipse 456"
        fill={COLOR_PRIMARY}
        cx="14"
        cy="14"
        r="14"
        transform="translate(14.4 47.1)"
      />
      <circle
        id="Ellipse_457"
        data-name="Ellipse 457"
        fill={COLOR_BLUE_GRAY}
        opacity={0.2}
        cx="9.7"
        cy="9.7"
        r="9.7"
        transform="translate(18.5 53.5)"
      />
      <circle
        id="Ellipse_458"
        data-name="Ellipse 458"
        fill={COLOR_WHITE}
        opacity={0.9}
        cx="3.4"
        cy="3.4"
        r="3.4"
        transform="translate(24.8 64.4)"
      />
      <circle
        id="Ellipse_459"
        data-name="Ellipse 459"
        fill={COLOR_PRIMARY}
        cx="14"
        cy="14"
        r="14"
        transform="translate(74.6 47.1)"
      />
      <circle
        id="Ellipse_460"
        data-name="Ellipse 460"
        fill={COLOR_BLUE_GRAY}
        opacity={0.2}
        cx="9.7"
        cy="9.7"
        r="9.7"
        transform="translate(78.8 53.5)"
      />
      <circle
        id="Ellipse_461"
        data-name="Ellipse 461"
        fill={COLOR_WHITE}
        opacity={0.9}
        cx="3.4"
        cy="3.4"
        r="3.4"
        transform="translate(85.1 64.4)"
      />
    </SvgIcon>
  );
}

SadFaceIcon.defaultProps = {
  dark: false,
};

SadFaceIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
