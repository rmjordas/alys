import React, { lazy, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { examplePropShape } from '../../features/Example';
import { propItemPropsShape } from '../../features/Props';

const Example = lazy(() => import('../../features/Example'));
const Props = lazy(() => import('../../features/Props'));

const Wrapper = styled.div`
  padding: 0 1em 0 1em;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

/** Displays information about a component. */
export default function ComponentPage({
  component: { name, description, props, examples },
}) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    wrapperRef.current.scrollTop = 0;
  });

  return (
    <Wrapper ref={(ref) => (wrapperRef.current = ref)}>
      <h2>
        <code>{name}</code>
      </h2>
      <p>{description}</p>

      <Example examples={examples} componentName={name} />

      <Props props={props} />
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
