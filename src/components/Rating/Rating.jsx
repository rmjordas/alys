import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StarIcon from '@common/StarIcon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 5em;
`;

const ClickBox = styled.div`
  width: 100%;
  cursor: ${(props) => (props.static ? 'default' : 'pointer')};
`;

/** Show a rating from 0 to 5 */
export default class Rating extends Component {
  static defaultProps = {
    static: false,
    color: 'default',
  };

  static propTypes = {
    /** Amount of filled stars */
    value: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,

    /**
     * Callback when rating value changes. Must have two params for the `event`
     * object and the `value`
     */
    onChange: PropTypes.func,

    /** If set to `true` the <Rating /> component value cannot be changed */
    static: PropTypes.bool,

    /** Fill color of <StarIcon /> items */
    color: PropTypes.oneOf(['default', 'secondary']),
  };

  state = {
    value: 0,
    tempValue: NaN,
  };

  _maxvalue = 5;

  componentDidMount() {
    this.setState({ value: this.props.value });
  }

  render() {
    return <Wrapper>{this._generateStars()}</Wrapper>;
  }

  _onStarClick = (value) => (event) => {
    const { onChange } = this.props;

    if (this.props.static) {
      return;
    }

    if (onChange) {
      onChange(event, value);
    }

    this.setState({
      tempValue: value,
      value,
    });
  };

  _onStarMouseOver = (value) => () => {
    if (this.props.static) {
      return;
    }

    this.setState(({ value: prevValue }) => ({
      tempValue: prevValue,
      value,
    }));
  };

  _onStarMouseOut = () => {
    if (this.props.static) {
      return;
    }

    this.setState(({ tempValue: prevTempValue }) => ({
      value: prevTempValue,
      tempValue: NaN,
    }));
  };

  _generateStars = () => {
    const stars = [];

    for (let i = 1; i <= this._maxvalue; i += 1) {
      stars.push(
        <ClickBox
          key={`ratingstar${i}`}
          static={this.props.static}
          onClick={this._onStarClick(i)}
          onMouseOver={this._onStarMouseOver(i)}
          onMouseOut={this._onStarMouseOut}
        >
          <StarIcon
            fontSize="0.77875em"
            filled={i <= this.state.value}
            color={this.props.color}
          />
        </ClickBox>,
      );
    }

    return stars;
  };
}
