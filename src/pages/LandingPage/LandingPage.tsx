import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import auth from 'utils/auth';
import ROUTES from 'constants/routes';
/* -------------------------------------------------------------------------- */

type LandingPageProps = RouteComponentProps<{}>;

const LandingPage: React.FC<LandingPageProps> = (props: LandingPageProps) => {
  const { history } = props;

  const handleSignIn = (): void => {
    auth.signIn((): void => history.push(ROUTES.DASHBOARD));
  };

  return (
    <>
      <Typography variant="h1">Welcome to FrankenReact</Typography>
      <Button variant="contained" color="primary" onClick={handleSignIn}>
        Sign In
      </Button>
    </>
  );
};

export default LandingPage;
