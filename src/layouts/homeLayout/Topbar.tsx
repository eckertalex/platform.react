import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
/* -------------------------------------------------------------------------- */

const useStyles = makeStyles((theme) =>
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

const Topbar: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h6' className={classes.title} noWrap>
          {t('Topbar.appName')}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
