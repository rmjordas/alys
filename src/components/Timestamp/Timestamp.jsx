import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

/** Formats a JavaScript object to a human-readable format */
export default function Timestamp({ value }) {
  const result = dayjs(value).format('MMMM D, HH:mm');

  return <React.Fragment>{result}</React.Fragment>;
}

Timestamp.propTypes = {
  /** A JavaScript Date object to be used to calculate timestamp */
  value: PropTypes.instanceOf(Date).isRequired,
};
