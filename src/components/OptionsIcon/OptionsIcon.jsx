import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function OptionsIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, colors[color]),
  };
  return (
    <SvgIcon viewBox="0 0 19 5" {...svgProps}>
      <g id="options-icon" transform="translate(-326 -201)">
        <g {...commonProps} id="ellipse" transform="translate(326 201)">
          <circle stroke="none" cx="2.5" cy="2.5" r="2.5" />
          <circle fill="none" cx="2.5" cy="2.5" r="2" />
        </g>
        <g
          {...commonProps}
          id="ellipse-2"
          data-name="ellipse"
          transform="translate(333 201)"
        >
          <circle stroke="none" cx="2.5" cy="2.5" r="2.5" />
          <circle fill="none" cx="2.5" cy="2.5" r="2" />
        </g>
        <g
          {...commonProps}
          id="ellipse-3"
          data-name="ellipse"
          transform="translate(340 201)"
        >
          <circle stroke="none" cx="2.5" cy="2.5" r="2.5" />
          <circle fill="none" cx="2.5" cy="2.5" r="2" />
        </g>
      </g>
    </SvgIcon>
  );
}

OptionsIcon.defaultProps = { dark: false, color: 'dark' };

OptionsIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
  /** Main color of icon when background is light. */ color: PropTypes.oneOf([
    'primary',
    'dark',
  ]),
};
