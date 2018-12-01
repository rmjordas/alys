import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SyntaxHighlightedCode = React.lazy(() =>
  import('@common/components/SyntaxHighlightedCode'),
);

const Wrapper = styled.div`
  border: solid 1px #d3d3d3;
  padding: 1em;
  margin-bottom: 1em;
  background-color: #f4f6f9;
`;

const Description = styled.h4`
  margin-top: 0;
`;

const ButtonWrapper = styled.p`
  margin-bottom: 0;
`;

export const examplePropsShape = PropTypes.shape({
  code: PropTypes.string.isRequired,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
});

export default class Example extends Component {
  static propTypes = {
    examples: PropTypes.arrayOf(examplePropsShape),
    componentName: PropTypes.string.isRequired,
  };

  state = {
    showCode: false,
  };

  render() {
    const { showCode } = this.state;
    const { code, description, name } = this.props.example;
    const ExampleComponent = React.lazy(() =>
      import(`../examples/${this.props.componentName}/${name}`),
    );

    return (
      <Wrapper>
        {description && <Description>{description}</Description>}

        <Suspense fallback={<div>Loading...</div>}>
          <ExampleComponent />
        </Suspense>

        <ButtonWrapper>
          <button onClick={this._toggleCode}>
            {showCode ? 'Hide' : 'Show'} Code
          </button>
        </ButtonWrapper>

        {showCode && (
          <Suspense
            fallback={
              <pre>
                <code>Loading...</code>
              </pre>
            }
          >
            <SyntaxHighlightedCode>{code}</SyntaxHighlightedCode>
          </Suspense>
        )}
      </Wrapper>
    );
  }

  _toggleCode = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({ showCode: !prevState.showCode }));
  };
}
