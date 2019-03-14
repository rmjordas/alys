import React, { useState } from 'react';
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
export default function Rating({
  value: initialValue,
  static: staticValue,
  color,
  onChange,
}) {
  const [value, setValue] = useState(initialValue);
  const [tempValue, setTempValue] = useState(NaN);

  const maxValue = 5;

  const onStarClick = (v) => (event) => {
    if (staticValue) {
      return;
    }

    if (onChange) {
      onChange(event, v);
    }

    setTempValue(v);
    setValue(v);
  };

  const onStarMouseOver = (v) => () => {
    if (staticValue) {
      return;
    }

    setTempValue(value);
    setValue(v);
  };

  const onStarMouseOut = () => {
    if (staticValue) {
      return;
    }

    setTempValue(NaN);
    setValue(tempValue);
  };

  return (
    <Wrapper>
      {Array.from({ length: maxValue + 1 }).map((_, i) =>
        i !== 0 ? (
          <ClickBox
            key={`ratingstar${i}`}
            static={staticValue}
            onClick={onStarClick(i)}
            onMouseOver={onStarMouseOver(i)}
            onMouseOut={onStarMouseOut}
          >
            <StarIcon fontSize="0.77875em" filled={i <= value} color={color} />
          </ClickBox>
        ) : null,
      )}
    </Wrapper>
  );
}

Rating.defaultProps = {
  static: false,
  color: 'default',
};

Rating.propTypes = {
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
