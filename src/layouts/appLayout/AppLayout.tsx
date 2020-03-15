import React, { ReactNode } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import MiniDrawer from 'layouts/appLayout/MiniDrawer';
import Topbar from 'layouts/appLayout/Topbar';
/* -------------------------------------------------------------------------- */

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      height: '100%',
      marginTop: '64px',
    },
  }),
);

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = (props: AppLayoutProps) => {
  const { children } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(open => !open);
  };

  return (
    <div className={classes.root}>
      <Topbar toggleDrawer={toggleDrawer} />
      <MiniDrawer open={open} />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default AppLayout;
