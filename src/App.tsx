import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Router } from '~/routes/Routes';
import { GlobalStyled } from '~/styles/GlobalStyled';
import { theme } from '~/styles/themes';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
