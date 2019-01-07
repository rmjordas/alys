import React, { Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';

import PropsTable from './PropsTable';

export default function Props({ props }) {
  return (
    <Fragment>
      <h3>Props</h3>

      {props ? (
        <Suspense fallback={<Fragment>Loading...</Fragment>}>
          <PropsTable props={props} />
        </Suspense>
      ) : (
        'This component accepts no props.'
      )}
    </Fragment>
  );
}

Props.propTypes = {
  props: PropTypes.shape((propValue, key) => {
    const { description, type, required, defaultValue } = propValue[key];

    if (typeof description !== 'string') {
      return new Error(`Invalid "description" value,`);
    }

    if (!type) {
      return new Error(`Invalid "type" value.`);
    }

    if (typeof required !== 'boolean') {
      return new Error(`Invalid "required" value.`);
    }

    if (!required && !defaultValue) {
      return new Error(`Invalid "defaultValue" value.`);
    }

    return null;
  }).isRequired,
};
