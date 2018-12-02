import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const getSize = ({ theme: { size } }) => size;
const calcSize = (percent) => ({ theme: { size } }) => size + size * percent;
const sizes = {
  small: 3.75,
  default: 6.25,
};

const Wrapper = styled.div`
  background-color: white;
  width: ${calcSize(0.2)}em;
  height: ${calcSize(0.2)}em;
  border-radius: ${({ theme: { size } }) => size * 0.1}em;
`;

const Img = styled.img`
  height: ${getSize}em;
  width: ${getSize}em;
  border-radius: ${({ theme: { size, round } }) =>
    round ? '50%' : `${size * 0.1}em`};
  margin: ${({ theme: { size, outlined, round } }) =>
    outlined && !round ? size * 0.1 : 0}em;
`;

/** Image avatars. */
export default function Avatar({ src, alt, outlined, size, round }) {
  const theme = {
    size: sizes[size],
    outlined,
    round,
  };

  return (
    <ThemeProvider theme={theme}>
      {outlined && !round ? (
        <Wrapper>
          <Img src={src} alt={alt} />
        </Wrapper>
      ) : (
        <Img src={src} alt={alt} />
      )}
    </ThemeProvider>
  );
}

Avatar.defaultProps = {
  alt: '',
  outlined: false,
  size: 'default',
  round: false,
};

Avatar.propTypes = {
  /** Path to the image file */
  src: PropTypes.string.isRequired,

  /** Alternate text for the image */
  alt: PropTypes.string,

  /** Show or hide image outline */
  outlined: PropTypes.bool,

  /** Pre-set avatar size */
  size: PropTypes.oneOf(['small', 'default']),

  /** Set to true to make the image round */
  round: PropTypes.bool,
};
