import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { styleLengths } from '@utils/string-utils';

const HeaderCell = styled.th`
  border-top: solid 1px #d3d3d3;
  border-bottom: solid 1px #d3d3d3;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  padding: 10px;
  width: ${({ width = 'auto' }) => styleLengths(width, '%')};
`;

/** Displays table header above prop values. */
export default function PropsTableHeader({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map(({ text, width }) => (
          <HeaderCell key={text} width={width}>
            {text}
          </HeaderCell>
        ))}
      </tr>
    </thead>
  );
}

PropsTableHeader.propTypes = {
  /** Configuration object for a table header. */
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      width: PropTypes.number,
    }),
  ).isRequired,
};
