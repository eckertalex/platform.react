import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import ProtectedRoute from 'router/ProtectedRoute';
import ROUTES from 'router/routes';
import AppRouter from 'router/AppRouter';
import AuthRouter from 'router/AuthRouter';
import HomeRouter from 'router/HomeRouter';
import NotFound from 'pages/NotFound';
/* -------------------------------------------------------------------------- */

const BaseRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.HOME.BASE} component={HomeRouter} />
      <Route path={ROUTES.AUTH.BASE} component={AuthRouter} />
      <ProtectedRoute path={ROUTES.APP.BASE} component={AppRouter} />
      <Redirect exact from={ROUTES.ROOT} to={ROUTES.HOME.BASE} />
      <Route path={ROUTES.CATCH_ALL} component={NotFound} />
    </Switch>
  </Router>
);

export default BaseRouter;
