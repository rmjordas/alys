import React from 'react';
import PropTypes from 'prop-types';

import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function MentorIcon({ dark, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark),
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 18 18" {...svgProps}>
      <path
        {...commonProps}
        id="path"
        d="M16.5,17.5H1.5a.945.945,0,0,1-1-1V1.5a.945.945,0,0,1,1-1h15a.945.945,0,0,1,1,1v15A.945.945,0,0,1,16.5,17.5Z"
      />
      <line
        {...commonProps}
        id="line"
        y1="3.7"
        x2="3.7"
        transform="translate(10.5 3.9)"
      />
      <path {...commonProps} id="path-2" data-name="path" d="M11.5,3.5h3v3" />
      <line
        {...commonProps}
        id="line-2"
        data-name="line"
        x1="3.7"
        y2="3.8"
        transform="translate(3.8 10.6)"
      />
      <path {...commonProps} id="path-3" data-name="path" d="M6.5,14.5h-3v-3" />
    </SvgIcon>
  );
}

MentorIcon.defaultProps = { dark: false };

MentorIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
