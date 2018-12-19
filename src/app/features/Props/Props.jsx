import React, { Fragment, Suspense } from 'react';

import PropsItem from './PropsItem';

export default function Props({ props }) {
  return (
    <Fragment>
      <h3>Props</h3>

      {props ? (
        <Suspense fallback={<Fragment>Loading...</Fragment>}>
          <PropsItem props={props} />
        </Suspense>
      ) : (
        'This component accepts no props.'
      )}
    </Fragment>
  );
}
