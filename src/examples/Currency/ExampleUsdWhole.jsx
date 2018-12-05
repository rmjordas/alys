import React from 'react';
import Currency from 'alys/Currency';

/** US Dollar but whole value only */
export default function ExampleUsdWhole() {
  return <Currency value={3.5} whole />;
}
