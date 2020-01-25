import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTES from 'constants/routes';
/* -------------------------------------------------------------------------- */

const NotFoundPage: React.FC<{}> = () => (
  <>
    <Typography variant="h1">404</Typography>
    <Typography variant="h2">Page Not Found</Typography>
    <Button component={Link} to={ROUTES.DASHBOARD} variant="contained" color="primary">
      Back to Safety
    </Button>
  </>
);

export default NotFoundPage;
