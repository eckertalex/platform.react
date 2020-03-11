import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import auth from 'utils/auth';
import ROUTES from 'constants/routes';
/* -------------------------------------------------------------------------- */

type SignInPageProps = RouteComponentProps<{}, {}, { referrer: string }>;

const SignInPage: React.FC<SignInPageProps> = (props: SignInPageProps) => {
  const {
    history,
    location: { state },
  } = props;

  const handleSignIn = (): void => {
    auth.signIn((): void => history.push(state?.referrer || ROUTES.DASHBOARD));
  };

  return (
    <>
      <Typography variant="h1">Sign in to FrankenReact</Typography>
      <Button variant="contained" color="primary" onClick={handleSignIn}>
        Sign In
      </Button>
    </>
  );
};

export default SignInPage;
