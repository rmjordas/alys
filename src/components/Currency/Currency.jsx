import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/** Produces the currency format of a value */
export default function Currency({ value, locale, code, whole }) {
  const fmt = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: code,
    currencyDisplay: 'symbol',
    minimumFractionDigits: whole ? 0 : undefined,
    maximumFractionDigits: whole ? 0 : undefined,
  });

  return <Fragment>{fmt.format(value)}</Fragment>;
}

Currency.defaultProps = {
  code: 'USD',
  locale: 'en-US',
  whole: false,
};

Currency.propTypes = {
  /** The amount to be formatted */
  value: PropTypes.number.isRequired,

  /**
   * Currency code. List of valid currency codes:
   * https://www.currency-iso.org/en/home/tables/table-a1.html
   */
  code: PropTypes.string,

  /** Language tag. More info: https://tools.ietf.org/html/rfc5646 */
  locale: PropTypes.string,

  /** If set to `true`, the value will only be rounded-off whole value */
  whole: PropTypes.bool,
};
