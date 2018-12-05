import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import ToggleButton from './ToggleButton';

const SyntaxHighlightedCode = React.lazy(() =>
  import('@common/SyntaxHighlightedCode'),
);

const Wrapper = styled.div`
  border: solid 1px #d3d3d3;
  padding: 1em;
  margin-bottom: 1em;
  background-color: ${({ theme: { darkMode } }) =>
    darkMode ? '#4C5264' : '#f4f6f9'};
`;

const Description = styled.h4`
  color: ${({ theme: { darkMode } }) => (darkMode ? '#fff' : 'inherit')};
  font-weight: 500;
  margin-top: 0;
`;

const ExampleCodeWrapper = styled.div`
  margin-top: 1.33em;
  margin-bottom: 0;
`;

export const examplePropsShape = PropTypes.shape({
  code: PropTypes.string.isRequired,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
});

/** Shows an actual component example of the component being described */
export default class Example extends Component {
  static propTypes = {
    /** A list of example information objects */
    example: examplePropsShape.isRequired,

    /** The name of the component for this example */
    componentName: PropTypes.string.isRequired,
  };

  state = {
    /**
     * If set to `true`, this will show the syntax highlighted code snipped for
     * this example.
     */
    showCode: false,

    /**
     * If set to `true`, this will update the background of the Wrapper to a
     * dark color.
     */
    darkMode: false,
  };

  render() {
    const { showCode, darkMode } = this.state;
    const { code, description, name } = this.props.example;
    const ExampleComponent = React.lazy(() =>
      import(`../examples/${this.props.componentName}/${name}`),
    );

    return (
      <ThemeProvider theme={{ darkMode }}>
        <Wrapper>
          {description && <Description>{description}</Description>}

          <Suspense fallback={<div>Loading...</div>}>
            <ExampleComponent />
          </Suspense>

          <ExampleCodeWrapper>
            <ToggleButton
              onClick={this._toggleCode}
              on={showCode}
              onText="hide code"
              offText="show code"
            />

            <ToggleButton
              onClick={this._toggleDarkMode}
              on={darkMode}
              onText="light mode"
              offText="dark mode"
            />

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
          </ExampleCodeWrapper>
        </Wrapper>
      </ThemeProvider>
    );
  }

  /** Flips the value of `showCode` */
  _toggleCode = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({ showCode: !prevState.showCode }));
  };

  /** Flops the value of `darkMode` */
  _toggleDarkMode = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };
}
