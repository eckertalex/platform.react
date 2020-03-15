import React, { Suspense } from 'react';
import BaseRouter from 'router/BaseRouter';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'theme/theme';
/* -------------------------------------------------------------------------- */

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Suspense fallback='Loading...'>
      <BaseRouter />
    </Suspense>
  </ThemeProvider>
);

export default App;
