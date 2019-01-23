import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  COLOR_PRIMARY,
  COLOR_WHITE_BLUE,
  COLOR_GRAY_BLUE,
  COLOR_WHITE,
  COLOR_SHADOW,
} from '@/constants';

const thumbStyle = css`
  appearance: none;
  background-color: ${COLOR_WHITE};
  border: 0.1em solid ${COLOR_GRAY_BLUE};
  box-shadow: 0px 0px 10px ${COLOR_SHADOW};
  border-radius: 50%;
  cursor: pointer;
  height: 1.3125em;
  margin-top: -0.45em;
  width: 1.3125em;
`;

const trackStyle = css`
  appearance: none;
  border: none;
  border-radius: 0.1em;
  cursor: default;
  height: 0.325em;
  width: 100%;
`;

const disabledStyle = css`
  background-color: ${COLOR_WHITE_BLUE};
  cursor: not-allowed;
`;

const Range = styled.input.attrs({
  type: 'range',
})`
  appearance: none;
  border: none;
  outline: none;
  vertical-align: middle;

  // Chrome, Safari, Opera
  &::-webkit-slider-runnable-track {
    ${trackStyle}
    background-color: ${COLOR_WHITE_BLUE};
    color: ${COLOR_PRIMARY};
  }

  &::-webkit-slider-thumb {
    ${thumbStyle};
  }

  // Firefox
  &::-moz-range-thumb {
    ${thumbStyle}
  }

  &::-moz-range-track {
    ${trackStyle}
    background-color: ${COLOR_WHITE_BLUE};
  }

  &::-moz-range-progress {
    background-color: ${COLOR_PRIMARY};
  }

  // Edge
  &::-ms-fill-lower {
    background-color: ${COLOR_PRIMARY};
  }

  &::-ms-fill-upper {
    background-color: ${COLOR_WHITE_BLUE};
    border: none;
  }

  &::-ms-thumb {
    ${thumbStyle}
  }

  &::-ms-track {
    ${trackStyle}
    background-color: ${COLOR_WHITE_BLUE};
  }

  &[disabled] {
    ${disabledStyle}

    &::-webkit-slider-runnable-track,
    &::-webkit-slider-thumb,
    &::-moz-range-thumb,
    &::-moz-range-track,
    &::-ms-thumb,
    &::-ms-track, {
      ${disabledStyle}
    }

    &::-ms-fill-lower {
      background-color: ${COLOR_WHITE_BLUE};
    }
  }
`;

/** Used for adjusting a value inside a range of numbers */
export default class Slider extends Component {
  static defaultProps = {
    fullWidth: false,
  };

  static propTypes = {
    /** If set to `true` the <Slider /> component's width will span it's container */
    fullWidth: PropTypes.bool,
  };

  render() {
    const { fullWidth, ...inputRangeProps } = this.props;

    return <Range {...inputRangeProps} />;
  }
}
