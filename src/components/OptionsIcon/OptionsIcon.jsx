import React from 'react';
import PropTypes from 'prop-types';

import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function OptionsIcon({ dark, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 19 5" {...svgProps}>
      <g id="options-icon" transform="translate(-326 -201)">
        <g
          id="ellipse"
          fill="none"
          stroke={iconDark(dark)}
          transform="translate(326 201)"
        >
          <circle stroke="none" cx="2.5" cy="2.5" r="2.5" />
          <circle fill="none" cx="2.5" cy="2.5" r="2" />
        </g>
        <g
          id="ellipse-2"
          data-name="ellipse"
          fill="none"
          stroke={iconDark(dark)}
          transform="translate(333 201)"
        >
          <circle stroke="none" cx="2.5" cy="2.5" r="2.5" />
          <circle fill="none" cx="2.5" cy="2.5" r="2" />
        </g>
        <g
          id="ellipse-3"
          data-name="ellipse"
          fill="none"
          stroke={iconDark(dark)}
          transform="translate(340 201)"
        >
          <circle stroke="none" cx="2.5" cy="2.5" r="2.5" />
          <circle fill="none" cx="2.5" cy="2.5" r="2" />
        </g>
      </g>
    </SvgIcon>
  );
}

OptionsIcon.defaultProps = { dark: false };

OptionsIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
