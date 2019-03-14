import React, { Fragment, useState } from 'react';
import Rating from 'alys/Rating';

/** Rating with secondary color and intial value of 3 */
export default function ExampleSecondary() {
  const [value, setValue] = useState(3);

  const handleOnChange = (_event, v) => setValue(v);

  return (
    <Fragment>
      <p>
        Rating value: <strong>{value}</strong>
      </p>

      <Rating value={value} onChange={handleOnChange} color="secondary" />
    </Fragment>
  );
}
