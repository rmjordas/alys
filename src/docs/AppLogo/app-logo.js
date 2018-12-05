import styled from 'styled-components';

import { ReactComponent as logo } from '../assets/app.svg';

/** Logo for documentation app */
const AppLogo = styled(logo).attrs(() => ({
  height: '20px',
  width: '20px',
}))`
  margin: 0 0.5em;
`;

export default AppLogo;
