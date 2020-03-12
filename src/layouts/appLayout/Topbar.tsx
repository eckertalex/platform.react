import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useTranslation } from 'react-i18next';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import ROUTES from 'router/routes';
import auth from 'auth';
import { useHistory } from 'react-router-dom';
/* -------------------------------------------------------------------------- */

const useStyles = makeStyles(theme =>
  createStyles({
    appBar: {
      flexGrow: 1,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

type TopbarProps = {
  toggleDrawer: () => void;
};

const Topbar: React.FC<TopbarProps> = props => {
  const { toggleDrawer } = props;
  const { t } = useTranslation();
  const history = useHistory();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = (): void => auth.signOut((): void => history.push(ROUTES.ROOT));

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={toggleDrawer}
          edge='start'
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title} noWrap>
          {t('Topbar.appName')}
        </Typography>
        <IconButton
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleMenu}
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>{t('Topbar.profile')}</MenuItem>
          <MenuItem onClick={handleSignOut}>{t('Topbar.signOut')}</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
