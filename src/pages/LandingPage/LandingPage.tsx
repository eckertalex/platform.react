import React from 'react';
import { Typography, Container } from '@material-ui/core';

import './LandingPage.css';
/* -------------------------------------------------------------------------- */

const LandingPage: React.FC<{}> = () => (
  <Container className="container">
    <Typography variant="h1">Welcome to FrankenReact</Typography>
  </Container>
);

export default LandingPage;
