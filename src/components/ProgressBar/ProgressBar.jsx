import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getWidthAsPercentOfTotalWidth } from '@utils/percent-utils';
import { styleLengths } from '@utils/string-utils';

const ProgressBarWrapper = styled.div`
  border: solid 1px lightgray;
  width: ${({ width }) => styleLengths(width)};
`;

const ProgressBarValue = styled.div`
  width: ${({ percent, width }) =>
    styleLengths(getWidthAsPercentOfTotalWidth(percent, width))};
  height: ${({ height }) => styleLengths(height)};
  background-color: ${({ percent }) => {
    if (percent === 100) return 'green';

    return percent > 50 ? 'lightgreen' : 'red';
  }};
`;

/** A custom progress bar. */
export default function ProgressBar({ width, height, percent }) {
  return (
    <ProgressBarWrapper width={width}>
      <ProgressBarValue width={width} height={height} percent={percent} />
    </ProgressBarWrapper>
  );
}

ProgressBar.defaultProps = {
  height: 5,
};

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,

  /** Bar width */
  width: PropTypes.number.isRequired,

  /** Bar height */
  height: PropTypes.number,
};
