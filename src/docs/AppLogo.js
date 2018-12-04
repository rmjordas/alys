import styled from 'styled-components';

import { ReactComponent as logo } from './assets/logo-icon.svg';

const AppLogo = styled(logo).attrs(() => ({
  height: '20px',
  width: '20px',
}))`
  margin: 0 0.5em;
`;

export default AppLogo;
