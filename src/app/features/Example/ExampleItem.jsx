import React, { Suspense, lazy, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import ToggleButton from '../../common/ToggleButton';

const SyntaxHighlightedCode = lazy(() =>
  import('@common/SyntaxHighlightedCode'),
);

const Wrapper = styled.div`
  border: solid 1px #d3d3d3;
  padding: 1em;
  margin-bottom: 1em;
  color: ${({ theme: { darkMode } }) => (darkMode ? '#fff' : 'inherit')};
  background-color: ${({ theme: { darkMode } }) =>
    darkMode ? '#4C5264' : '#f4f6f9'};
`;

const Description = styled.h4`
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
export default function ExampleItem({
  componentName,
  example: { code, description, name },
}) {
  const [showCode, setShowCode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const ExampleComponent = lazy(() =>
    import(`../../../examples/${componentName}/${name}`),
  );

  /** Flips the value of `showCode` */
  const toggleCode = (event) => {
    event.preventDefault();
    setShowCode((prevShowCode) => !prevShowCode);
  };

  /** Flops the value of `darkMode` */
  const toggleDarkMode = (event) => {
    event.preventDefault();
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeProvider theme={{ darkMode }}>
      <Wrapper>
        {description && <Description>{description}</Description>}

        <Suspense
          fallback={
            <div style={{ color: darkMode ? '#fff' : 'inherit' }}>
              Loading...
            </div>
          }
        >
          <ExampleComponent />
        </Suspense>

        <ExampleCodeWrapper>
          <ToggleButton
            onClick={toggleCode}
            on={showCode}
            onText="hide code"
            offText="show code"
          />

          <ToggleButton
            onClick={toggleDarkMode}
            on={darkMode}
            onText="light mode"
            offText="dark mode"
          />

          {showCode && (
            <Suspense
              fallback={
                <pre>
                  <code style={{ color: darkMode ? '#fff' : 'inherit' }}>
                    Loading...
                  </code>
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

ExampleItem.propTypes = {
  /** A list of example information objects */
  example: examplePropsShape.isRequired,

  /** The name of the component for this example */
  componentName: PropTypes.string.isRequired,
};
