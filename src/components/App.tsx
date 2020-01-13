import React from 'react';
import { Container, Typography } from '@material-ui/core';

import 'components/App.css';
/* -------------------------------------------------------------------------- */

const App: React.FC<{}> = () => {
  return (
    <Container className="container">
      <Typography variant="h1">Welcome to FrankenReact</Typography>
    </Container>
  );
};

export default App;
