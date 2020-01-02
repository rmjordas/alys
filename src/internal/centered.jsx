/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

export const Centered = ({ children }) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>{children}</div>
);

Centered.propTypes = {
  children: PropTypes.node.isRequired,
};
