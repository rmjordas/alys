import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { examplePropShape } from '../../features/Example';
import { propItemPropsShape } from '../../features/Props';

const Example = React.lazy(() => import('../../features/Example'));
const Props = React.lazy(() => import('../../features/Props'));

const Wrapper = styled.div`
  padding: 0 1em 0 1em;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

/** Displays information about a component. */
export default class ComponentPage extends Component {
  static propTypes = {
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

  componentDidUpdate() {
    this._wrapper.scrollTop = 0;
  }

  render() {
    const { name, description, props, examples } = this.props.component;

    return (
      <Wrapper ref={(ref) => (this._wrapper = ref)}>
        <h2>
          <code>{name}</code>
        </h2>
        <p>{description}</p>

        <Example examples={examples} componentName={name} />

        <Props props={props} />
      </Wrapper>
    );
  }
}
