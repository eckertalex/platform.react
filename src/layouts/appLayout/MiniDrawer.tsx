import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import { useTranslation } from 'react-i18next';

import { APP } from 'router/routes';
import SidebarNav from 'layouts/appLayout/SidebarNav';
/* -------------------------------------------------------------------------- */

const DRAWER_WIDTH = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    paper: {
      backgroundColor: 'transparent',
      borderRight: 'none',
    },
    drawerOpen: {
      width: DRAWER_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: theme.mixins.toolbar,
  }),
);

type MiniDrawerProps = {
  open: boolean;
};

const MiniDrawer = (props: MiniDrawerProps) => {
  const { open } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  const navLinks = [
    {
      title: t('MiniDrawer.Dashboard'),
      href: APP.DASHBOARD,
      icon: <DashboardIcon />,
    },
    {
      title: t('MiniDrawer.Settings'),
      href: APP.SETTINGS,
      icon: <SettingsIcon />,
    },
  ];

  return (
    <Drawer
      variant='permanent'
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx(classes.paper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar} />
      <SidebarNav links={navLinks} />
    </Drawer>
  );
};

export default MiniDrawer;
