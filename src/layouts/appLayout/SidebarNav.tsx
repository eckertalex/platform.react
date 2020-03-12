import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, makeStyles, ListItemIcon, ListItemText } from '@material-ui/core';
/* -------------------------------------------------------------------------- */

const useStyles = makeStyles(theme => ({
  icon: {
    color: 'grey',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  active: {
    color: theme.palette.primary.main,
    '& div': {
      color: theme.palette.primary.main,
    },
  },
}));

type SidebarNavProps = {
  links: Array<{
    title: string;
    href: string;
    icon: JSX.Element;
  }>;
};

const SidebarNav: React.FC<SidebarNavProps> = props => {
  const { links } = props;
  const classes = useStyles();

  return (
    <List>
      {links.map(link => (
        <ListItem
          button
          component={NavLink}
          activeClassName={classes.active}
          to={link.href}
          disableGutters
          key={link.title}
        >
          <ListItemIcon className={classes.icon}>{link.icon}</ListItemIcon>
          <ListItemText>{link.title}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarNav;
