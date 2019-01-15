import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { parseType } from '@utils/props-utils';

export const DataCell = styled.td.attrs(({ required }) => ({
  title: required ? 'This prop is required by the component.' : null,
}))`
  padding: 10px;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  color: ${({ required, color }) => (required ? '#aaa' : color)};
`;

/** Displays a prop's details. */
export default function PropsTableRow({ prop }) {
  const [key, { description, type, required, defaultValue }] = prop;
  const parsedType = parseType(type);

  return (
    <tr key={key}>
      <DataCell>{key}</DataCell>

      <DataCell>{description}</DataCell>

      <DataCell>
        <code>{type.name !== 'instanceOf' && type.name}</code>

        <React.Fragment>
          {parsedType.length > 1 && `: `}

          {type.name === 'enum' &&
            parsedType
              .map((v) => <code key={`enum-${v}`}>{v}</code>)
              .reduce((a, v) => [a, ' | ', v])}

          {type.name === 'union' &&
            parsedType
              .map((v) => <code key={`union-${v}`}>{v}</code>)
              .reduce((a, v) => [a, ', ', v])}

          {(type.name === 'custom' || type.name === 'instanceOf') && (
            <code>{parsedType}</code>
          )}
        </React.Fragment>
      </DataCell>

      <DataCell required={required}>
        {defaultValue && defaultValue.value}
        {required && 'required'}
      </DataCell>
    </tr>
  );
}

PropsTableRow.propTypes = {
  /** A tuple for a single prop item. */
  prop: PropTypes.arrayOf((propValue) => {
    if (!Array.isArray(propValue) || propValue.length !== 2) {
      return new Error(`"prop" needs to be an array of two items.`);
    }

    const [key, { description, type, required, defaultValue }] = propValue;

    if (typeof key !== 'string') {
      return new Error(`Invalid "key" value.`);
    }

    if (typeof description !== 'string') {
      return new Error(`Invalid "description" value.`);
    }

    if (!type) {
      return new Error(`Invalid "type" value.`);
    }

    if (typeof required !== 'boolean') {
      return new Error(`Invalid "required" value.`);
    }

    if (required && defaultValue) {
      return new Error(`Cannot have a default value if ${key} is required.`);
    }

    return null;
  }).isRequired,
};
