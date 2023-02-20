import { ThemeProvider } from 'styled-components';

import { HelloWorld } from '~/components';
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
      <HelloWorld />
    </ThemeProvider>
  );
};

export default App;
