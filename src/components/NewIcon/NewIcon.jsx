import React from 'react';
import PropTypes from 'prop-types';

import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function NewIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark),
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 19 19" {...svgProps}>
      <g id="new-icon" transform="translate(0 0)">
        <line
          {...commonProps}
          id="line"
          x1="18"
          transform="translate(0.5 9.5)"
        />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          y1="18"
          transform="translate(9.5 0.5)"
        />
      </g>
    </SvgIcon>
  );
}

NewIcon.defaultProps = {
  dark: false,
};

NewIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
