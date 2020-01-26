import React from 'react';
import Router from 'App/Router';
import { Container } from '@material-ui/core';

import 'App/App.css';
/* -------------------------------------------------------------------------- */

const App: React.FC<{}> = () => (
  <Container maxWidth="lg" disableGutters className="container">
    <Router />
  </Container>
);

export default App;
