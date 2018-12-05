import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { styleLengths } from '@utils/string-utils';
import { parseType } from '@utils/props-utils';

const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 1em;
  width: 100%;
`;

const HeaderCell = styled.th`
  border-top: solid 1px #d3d3d3;
  border-bottom: solid 1px #d3d3d3;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  padding: 10px;
  font-weight: 700;
  width: ${({ width = 'auto' }) => styleLengths(width, '%')};
`;

const DataCell = styled.td.attrs(({ required }) => ({
  title: required ? 'This prop is required by the component.' : null,
}))`
  padding: 10px;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  color: ${({ required, color }) => (required ? '#aaa' : color)};
`;

export const propItemPropsShape = PropTypes.shape({
  description: PropTypes.string.isRequired,
  type: PropTypes.shape({ name: PropTypes.string }).isRequired,
  defaultValue: PropTypes.shape({ value: PropTypes.any }),
  required: PropTypes.bool,
});

/** Lists the props of a component with descriptions and default values */
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
                <code>{type.name}</code>

                {type.name === 'enum' && (
                  <React.Fragment>
                    :{' '}
                    {parseType(type)
                      .map((v) => <code key={`${key}-${v}`}>{v}</code>)
                      .reduce((a, v) => [a, ' | ', v])}
                  </React.Fragment>
                )}

                {type.name === 'union' && (
                  <React.Fragment>
                    :{' '}
                    {parseType(type)
                      .map((v) => <code key={`${key}-${v}`}>{v}</code>)
                      .reduce((a, v) => [a, ', ', v])}
                  </React.Fragment>
                )}

                {type.name === 'custom' && (
                  <React.Fragment>
                    : {<code>{parseType(type)}</code>}
                  </React.Fragment>
                )}
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
  /** Contains prop information for a component */
  props: PropTypes.objectOf(propItemPropsShape).isRequired,
};
