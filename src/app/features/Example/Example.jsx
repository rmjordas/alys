import React, { Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';

import ExampleItem from './ExampleItem';
import { pluralize } from '@utils/string-utils';

export default function Example({ componentName, examples }) {
  const numOfExamples = examples.length;

  return (
    <Fragment>
      <h3>{numOfExamples > 1 && pluralize('Example')}</h3>

      {numOfExamples > 0
        ? examples.map((example) => (
            <Suspense
              key={example.code}
              fallback={<Fragment>Loading...</Fragment>}
            >
              <ExampleItem example={example} componentName={componentName} />
            </Suspense>
          ))
        : 'No examples exist.'}
    </Fragment>
  );
}

export const examplePropsShape = PropTypes.shape({
  code: PropTypes.string.isRequired,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
});

Example.propTypes = {
  /** The name of the component for these example */
  componentName: PropTypes.string.isRequired,

  /** A list of example information objects */
  examples: PropTypes.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.arrayOf(examplePropsShape),
  ]).isRequired,
};
