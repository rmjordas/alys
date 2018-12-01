import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { styleLengths } from '@utils/string-utils';

const Table = styled.table`
  width: 100%;
`;

const HeaderCell = styled.td`
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  padding: 5px;
  font-weight: 700;
  width: ${({ width = 'initial' }) => styleLengths(width, '%')};
`;

const DataCell = styled.td.attrs(({ required }) => ({
  title: required ? 'This prop is required by the component.' : null,
}))`
  padding: 5px;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  color: ${({ required, color }) => (required ? '#aaa' : color)};
`;

export const propItemPropsShape = PropTypes.shape({
  description: PropTypes.string.isRequired,
  type: PropTypes.shape({ name: PropTypes.string }).isRequired,
  defaultValue: PropTypes.shape({ value: PropTypes.any }),
  required: PropTypes.bool,
});

export default function Props({ props }) {
  return (
    <Table>
      <thead>
        <tr>
          <HeaderCell width={20}>Name</HeaderCell>
          <HeaderCell width={50}>Description</HeaderCell>
          <HeaderCell width={15}>Type</HeaderCell>
          <HeaderCell width={15}>Default</HeaderCell>
        </tr>
      </thead>

      <tbody>
        {Object.entries(props).map(([key, value]) => {
          const { description, type } = value;

          return (
            <tr key={key}>
              <DataCell>{key}</DataCell>

              <DataCell>{description}</DataCell>

              <DataCell>
                <code>
                  {type.name}

                  {type.name === 'enum' &&
                    `: ${type.value.map((v) => v.value).join(' | ')}`}

                  {type.name === 'union' &&
                    `: ${type.value
                      .map((v) =>
                        v.name === 'arrayOf' ? `${v.value.name}[]` : v.name,
                      )
                      .join(', ')}`}
                </code>
              </DataCell>

              <DataCell required={value.required}>
                {value.defaultValue && value.defaultValue.value}
                {value.required && 'required'}
              </DataCell>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

Props.propTypes = {
  props: PropTypes.objectOf(propItemPropsShape).isRequired,
};
