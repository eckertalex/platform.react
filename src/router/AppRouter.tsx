import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { APP } from 'router/routes';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import AppLayout from 'layouts/appLayout/AppLayout';
/* -------------------------------------------------------------------------- */

const AppRouter: React.FC = () => (
  <AppLayout>
    <Switch>
      <Route path={APP.DASHBOARD} component={Dashboard} />
      <Route path={APP.SETTINGS} component={Settings} />
      <Redirect to={APP.DASHBOARD} />
    </Switch>
  </AppLayout>
);

export default AppRouter;
