import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/styles';

import Topbar from 'layouts/authLayout/Topbar';
/* -------------------------------------------------------------------------- */

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: '100%',
  },
  content: {
    height: '100%',
  },
}));

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default AuthLayout;
