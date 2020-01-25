import React from 'react';
import { Typography, Container } from '@material-ui/core';

import './NotFoundPage.css';
/* -------------------------------------------------------------------------- */

const NotFoundPage: React.FC<{}> = () => (
  <Container className="container">
    <Typography variant="h1">404: Page Not Found</Typography>
  </Container>
);

export default NotFoundPage;
