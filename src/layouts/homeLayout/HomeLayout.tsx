import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/styles';

import Topbar from 'layouts/homeLayout/Topbar';
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

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = (props: HomeLayoutProps) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default HomeLayout;
