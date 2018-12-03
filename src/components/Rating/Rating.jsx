import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StarIcon from '@common/StarIcon';

const MAX_VALUE = 5;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 5em;
`;

export default function Rating({ value, color }) {
  let stars = [];

  for (let i = 1; i <= MAX_VALUE; i += 1) {
    stars.push(
      <StarIcon
        fontSize="0.77875em"
        key={`ratingstar${i}`}
        filled={i <= value}
        color={color}
      />,
    );
  }

  return <Wrapper>{stars}</Wrapper>;
}

Rating.defaultProps = {
  color: 'default',
};

Rating.propTypes = {
  /** Amount of filled stars */
  value: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,

  /** Fill color of stars */
  color: PropTypes.oneOf(['default', 'secondary']),
};
