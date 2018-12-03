import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function StarIcon({ filled, ...svgProps }) {
  return (
    <SvgIcon viewBox="0 0 13.067 12.462" {...svgProps}>
      <path
        id="path"
        fill={filled ? '#60c3ff' : '#e2e8ed'}
        d="M12.619,4.474H8.242L6.921.3a.415.415,0,0,0-.784,0L4.774,4.474H.4a.408.408,0,0,0-.248.743L3.7,7.777l-1.362,4.17a.4.4,0,0,0,.619.454l3.551-2.56,3.551,2.56a.4.4,0,0,0,.619-.454L9.316,7.777l3.551-2.56A.408.408,0,0,0,12.619,4.474Z"
        transform="translate(0.026 -0.025)"
      />
    </SvgIcon>
  );
}

StarIcon.defaultProps = { dark: false };

StarIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,
};
