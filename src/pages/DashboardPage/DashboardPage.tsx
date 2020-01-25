import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import auth from 'utils/auth';
import ROUTES from 'constants/routes';
/* -------------------------------------------------------------------------- */

type DashboardPageProps = RouteComponentProps<{}>;

const DashboardPage: React.FC<DashboardPageProps> = (props: DashboardPageProps) => {
  const { history } = props;

  const handleSignOut = (): void => {
    auth.signOut((): void => history.push(ROUTES.ROOT));
  };

  return (
    <>
      <Typography variant="h1">FrankenReact Dashboard</Typography>{' '}
      <Button variant="contained" color="primary" onClick={handleSignOut}>
        Sign Out
      </Button>
    </>
  );
};

export default DashboardPage;
