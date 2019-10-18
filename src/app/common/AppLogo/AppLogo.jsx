import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/app.svg';

/** Logo for documentation app */
const AppLogo = styled(Logo).attrs(() => ({
  height: '20px',
  width: '20px',
}))`
  margin: 0 0.5em;
`;

export default AppLogo;
