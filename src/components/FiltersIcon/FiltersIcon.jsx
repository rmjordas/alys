import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function FiltersIcon({ dark, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 17.175 18" {...svgProps}>
      <g id="filters-icon" transform="translate(-30 -58)">
        <path
          id="path"
          fill="none"
          stroke={dark ? '#fff' : '#4c5264'}
          d="M-2,0H8.148"
          transform="translate(32 60)"
        />
        <path
          id="path-2"
          data-name="path"
          fill="none"
          stroke={dark ? '#fff' : '#4c5264'}
          d="M0,0H4.026"
          transform="translate(43.148 60)"
        />
        <path
          id="path-3"
          data-name="path"
          fill="none"
          stroke={dark ? '#fff' : '#4c5264'}
          d="M0,0H7.026"
          transform="translate(40.148 67)"
        />
        <path
          id="path-4"
          data-name="path"
          fill="none"
          stroke={dark ? '#fff' : '#4c5264'}
          d="M-2,0H5.026"
          transform="translate(32.148 67)"
        />
        <path
          id="path-5"
          data-name="path"
          fill="none"
          stroke={dark ? '#fff' : '#4c5264'}
          d="M-2,0H2"
          transform="translate(32.148 74)"
        />
        <path
          id="path-6"
          data-name="path"
          fill="none"
          stroke={dark ? '#fff' : '#4c5264'}
          d="M0,0H10.026"
          transform="translate(37.148 74)"
        />
        <g
          id="ellipse"
          fill="none"
          stroke={dark ? '#fff' : '#4c5264'}
          transform="translate(39.648 58)"
        >
          <circle stroke="none" cx="2" cy="2" r="2" />
          <circle fill="none" cx="2" cy="2" r="1.5" />
        </g>
        <g
          id="ellipse-2"
          data-name="ellipse"
          fill="none"
          stroke={dark ? '#fff' : '#4c5264'}
          transform="translate(36.648 65)"
        >
          <circle stroke="none" cx="2" cy="2" r="2" />
          <circle fill="none" cx="2" cy="2" r="1.5" />
        </g>
        <g
          id="ellipse-3"
          data-name="ellipse"
          fill="none"
          stroke={dark ? '#fff' : '#4c5264'}
          transform="translate(33.648 72)"
        >
          <circle stroke="none" cx="2" cy="2" r="2" />
          <circle fill="none" cx="2" cy="2" r="1.5" />
        </g>
      </g>
    </SvgIcon>
  );
}

FiltersIcon.defaultProps = { dark: false };

FiltersIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
