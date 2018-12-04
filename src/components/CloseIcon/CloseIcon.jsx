import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function CloseIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 17.414 17.414" {...svgProps}>
      <g id="close-icon" transform="translate(0.207 0.207)">
        <line
          {...commonProps}
          id="line"
          x1="16"
          y1="16"
          transform="translate(0.5 0.5)"
        />
        <line
          {...commonProps}
          id="line-2"
          data-name="line"
          y1="16"
          x2="16"
          transform="translate(0.5 0.5)"
        />
      </g>
    </SvgIcon>
  );
}

CloseIcon.defaultProps = { dark: false };

CloseIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};