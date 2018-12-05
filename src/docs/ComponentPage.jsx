import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { examplePropShape } from './Example';
import { propItemPropsShape } from './Props';
import { pluralize } from '@utils/string-utils';

const Example = React.lazy(() => import('./Example'));
const Props = React.lazy(() => import('./Props'));

const Wrapper = styled.div`
  padding: 0 1em 0 1em;
  height: 100%;
  overflow-y: auto;

  @media (min-width: 60em) {
    margin-left: 18.5em;
  }
`;

/** Displays information about a component. */
export default function ComponentPage({ component }) {
  const { name, description, props, examples } = component;
  const numOfExamples = examples.length;

  return (
    <Wrapper>
      <h2>
        <code>{name}</code>
      </h2>

      <p>{description}</p>

      <h3>{numOfExamples > 1 && pluralize('Example')}</h3>

      {numOfExamples > 0
        ? examples.map((example) => (
            <Suspense
              key={example.code}
              fallback={<React.Fragment>Loading...</React.Fragment>}
            >
              <Example example={example} componentName={name} />
            </Suspense>
          ))
        : 'No examples exist.'}

      <h3>Props</h3>

      {props ? (
        <Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
          <Props props={props} />
        </Suspense>
      ) : (
        'This component accepts no props.'
      )}
    </Wrapper>
  );
}

ComponentPage.propTypes = {
  /** Component information to be displayed */
  component: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    props: PropTypes.objectOf(propItemPropsShape),
    examples: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.arrayOf(examplePropShape),
    ]),
  }).isRequired,
};
