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
export default function HappyFaceIcon({ dark, color, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 116.8 116.8" {...svgProps}>
      <circle
        id="Ellipse_448"
        data-name="Ellipse 448"
        fill={COLOR_PRIMARY_FILL}
        cx="58.4"
        cy="58.4"
        r="58.4"
        transform="translate(0 0)"
      />
      <g id="Group_1501" data-name="Group 1501">
        <path
          id="Path_1229"
          data-name="Path 1229"
          fill={COLOR_PRIMARY}
          d="M45.5,85.7A30.91,30.91,0,0,0,52,88.2a23.774,23.774,0,0,0,12.6-.1A36.7,36.7,0,0,0,71,85.6h.1a1.528,1.528,0,0,1,2.1.7,1.7,1.7,0,0,1,0,1.4A15.337,15.337,0,0,1,67,93.6a18.66,18.66,0,0,1-17.2,0,15.337,15.337,0,0,1-6.2-5.9,1.489,1.489,0,0,1,.6-2,1.467,1.467,0,0,1,1.3,0Z"
        />
      </g>
      <circle
        id="Ellipse_449"
        data-name="Ellipse 449"
        fill={COLOR_PRIMARY}
        cx="14"
        cy="14"
        r="14"
        transform="translate(14.3 44.1)"
      />
      <circle
        id="Ellipse_450"
        data-name="Ellipse 450"
        fill={COLOR_BLUE_GRAY}
        opacity={0.2}
        cx="9.7"
        cy="9.7"
        r="9.7"
        transform="translate(20.3 46.4)"
      />
      <circle
        id="Ellipse_451"
        data-name="Ellipse 451"
        fill={COLOR_WHITE}
        opacity={0.9}
        cx="3.4"
        cy="3.4"
        r="3.4"
        transform="translate(29.9 49.7)"
      />
      <circle
        id="Ellipse_452"
        data-name="Ellipse 452"
        fill={COLOR_PRIMARY}
        cx="14"
        cy="14"
        r="14"
        transform="translate(74.6 44.1)"
      />
      <circle
        id="Ellipse_453"
        data-name="Ellipse 453"
        fill={COLOR_BLUE_GRAY}
        opacity={0.2}
        cx="9.7"
        cy="9.7"
        r="9.7"
        transform="translate(80.5 46.4)"
      />
      <circle
        id="Ellipse_454"
        data-name="Ellipse 454"
        fill={COLOR_WHITE}
        opacity={0.9}
        cx="3.4"
        cy="3.4"
        r="3.4"
        transform="translate(90.2 49.7)"
      />
    </SvgIcon>
  );
}

HappyFaceIcon.defaultProps = {
  dark: false,
};

HappyFaceIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
