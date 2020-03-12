import React, { Suspense } from 'react';
import Router from 'router/Router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'theme/theme';
/* -------------------------------------------------------------------------- */

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Suspense fallback='Loading...'>
      <Router />
    </Suspense>
  </ThemeProvider>
);

export default App;
