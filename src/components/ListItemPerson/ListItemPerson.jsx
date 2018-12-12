import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLOR_WHITE, COLOR_DARK } from '@/constants';
import ActiveIndicator from '@/ActiveIndicator';
import Avatar from '@/Avatar';
import Typepography from '@/Typography';
import OptionsIcon from '@/OptionsIcon';

const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: ${COLOR_WHITE};
  color: ${COLOR_DARK};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 6.28125em;
  width: 100%;
  padding: 0.9375em;

  @media (min-width: 34em) {
    padding: 0 1.875em;
  }
`;

const Text = styled.div`
  display: flex;
  flex: 0.86;
  flex-direction: column;
`;

const PrimaryText = styled.p`
  font-weight: 500;
  margin: 0 0 0.5em 0;
`;

export default function ListItemPerson({ active, name, detail }) {
  return (
    <Wrapper>
      <ActiveIndicator active={active} />
      <Avatar size="smaller" />
      <Text>
        <PrimaryText>{name}</PrimaryText>
        <Typepography>{detail}</Typepography>
      </Text>
      <OptionsIcon />
    </Wrapper>
  );
}

ListItemPerson.defaultProps = {
  active: false,
};

ListItemPerson.propTypes = {
  /** Sets the status of the person item */
  active: PropTypes.bool,

  /** The name to display */
  name: PropTypes.string.isRequired,

  /** A detail about this item */
  detail: PropTypes.string.isRequired,
};
