import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function CommentIcon({ dark, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 21.4 18.3" {...svgProps}>
      <g id="comment-icon" transform="translate(0 0)">
        <path
          id="path"
          fill="none"
          stroke={dark ? '#fff' : '#4C5264'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M10.7.5C5.1.5.5,4.3.5,9a7.82,7.82,0,0,0,2.6,5.7l-.8,3.1,4-1.1a12.307,12.307,0,0,0,4.4.8c5.6,0,10.2-3.8,10.2-8.5S16.4.5,10.7.5Z"
        />
      </g>
    </SvgIcon>
  );
}

CommentIcon.defaultProps = { dark: false };

CommentIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
