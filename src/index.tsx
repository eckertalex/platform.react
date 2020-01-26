import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import App from 'App/App';
import 'utils/i18n';

import 'typeface-roboto';
import 'react-toastify/dist/ReactToastify.css';
/* -------------------------------------------------------------------------- */

const Index: React.FC<{}> = () => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
