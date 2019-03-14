import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

/** Formats a JavaScript object to a human-readable format */
export default function Timestamp({ value }) {
  const result = dayjs(value).format('MMM D, HH:mm');

  return <Fragment>{result}</Fragment>;
}

Timestamp.propTypes = {
  /** A JavaScript Date object to be used to calculate timestamp */
  value: PropTypes.instanceOf(Date).isRequired,
};
