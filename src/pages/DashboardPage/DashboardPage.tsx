import React from 'react';
import { Typography, Container } from '@material-ui/core';

import './DashboardPage.css';
/* -------------------------------------------------------------------------- */

const DashboardPage: React.FC<{}> = () => (
  <Container className="container">
    <Typography variant="h1">FrankenReact Dashboard</Typography>
  </Container>
);

export default DashboardPage;
