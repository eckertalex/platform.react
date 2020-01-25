import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import ROUTES from 'constants/routes';
/* -------------------------------------------------------------------------- */

const LandingPage: React.FC<{}> = () => {
  return (
    <>
      <Typography variant="h1">Welcome to FrankenReact</Typography>
      <Button component={Link} to={ROUTES.SIGN_IN} variant="contained" color="primary">
        To Sign In Page
      </Button>
    </>
  );
};

export default LandingPage;
