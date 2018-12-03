import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function TrashIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: dark ? '#fff' : '#4C5264',
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 19 19" {...svgProps}>
      <path
        {...commonProps}
        id="path"
        d="M16.5,2.5l-1,15a.945.945,0,0,1-1,1H4.5a.945.945,0,0,1-1-1l-1-15"
      />
      <line id="line" {...commonProps} x2="18" transform="translate(0.5 2.5)" />
      <line
        {...commonProps}
        id="line-2"
        data-name="line"
        x2="10"
        transform="translate(4.5 0.5)"
      />
      <line
        {...commonProps}
        id="line-3"
        data-name="line"
        y2="10"
        transform="translate(9.5 5.5)"
      />
      <line
        {...commonProps}
        id="line-4"
        data-name="line"
        y2="10"
        transform="translate(6.5 5.5)"
      />
      <line
        {...commonProps}
        id="line-5"
        data-name="line"
        y2="10"
        transform="translate(12.5 5.5)"
      />
    </SvgIcon>
  );
}

TrashIcon.defaultProps = {
  dark: false,
};

TrashIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
