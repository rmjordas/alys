import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import {
  COLOR_GRAY_BLUE,
  COLOR_WHITE,
  COLOR_WHITE_BLUE,
  avatarSizes,
} from '@/constants';
import MentorIcon from '@/MentorIcon';

/** Returns the size of the avatar */
export function getSize({ theme: { size } }) {
  return size;
}

/** Calculates size of the avatar with an outline */
export function calcSize(percent) {
  return ({ theme: { size } }) => size + size * percent;
}

const Wrapper = styled.div`
  background-color: ${COLOR_WHITE};
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

const DefaultWrapper = styled(Wrapper)`
  background-color: ${COLOR_WHITE_BLUE};
`;

const StyledMentorIcon = styled(MentorIcon)`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  && path {
    stroke: ${COLOR_GRAY_BLUE};
  }
`;

/** Image avatars. */
export default function Avatar({ src, alt, outlined, size, round }) {
  const theme = {
    size: avatarSizes[size],
    outlined,
    round,
  };

  return (
    <ThemeProvider theme={theme}>
      {src ? (
        outlined && !round ? (
          <Wrapper>
            <Img src={src} alt={alt} />
          </Wrapper>
        ) : (
          <Img src={src} alt={alt} />
        )
      ) : (
        <DefaultWrapper>
          <StyledMentorIcon />
        </DefaultWrapper>
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
  src: PropTypes.string,

  /** Alternate text for the image */
  alt: PropTypes.string,

  /** Show or hide image outline */
  outlined: PropTypes.bool,

  /** Pre-set avatar size */
  size: PropTypes.oneOf(['smaller', 'small', 'default']),

  /** If set `true`, image shape will be clipped to a circle */
  round: PropTypes.bool,
};
