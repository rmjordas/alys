import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PropsTableHeader from './PropsTableHeader';
import PropsTableRow from './PropsTableRow';

const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 1em;
  width: 100%;
`;

const headers = [
  { text: 'Name', width: 20 },
  { text: 'Description', width: 50 },
  { text: 'Type', width: 15 },
  { text: 'Default', width: 15 },
];

/** Lists the props of a component with descriptions and default values */
export default function PropsTable({ props }) {
  return (
    <Table>
      <PropsTableHeader headers={headers} />

      <tbody>
        {Object.entries(props).map((prop) => (
          <PropsTableRow key={prop[0]} prop={prop} />
        ))}
      </tbody>
    </Table>
  );
}

export const propItemPropsShape = PropTypes.shape({
  description: PropTypes.string.isRequired,
  type: PropTypes.shape({ name: PropTypes.string }).isRequired,
  defaultValue: PropTypes.shape({ value: PropTypes.any }),
  required: PropTypes.bool,
});

PropsTable.propTypes = {
  /** Contains prop information for a component */
  props: PropTypes.objectOf(propItemPropsShape).isRequired,
};
