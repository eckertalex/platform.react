import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import ProtectedRouteWithLayout from 'router/ProtectedRouteWithLayout';
import RouteWithLayout from 'router/RouteWithLayout';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Landing from 'pages/Landing';
import NotFound from 'pages/NotFound';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import ROUTES from 'router/routes';
import AuthLayout from 'layouts/authLayout/AuthLayout';
import AppLayout from 'layouts/appLayout/AppLayout';
/* -------------------------------------------------------------------------- */

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {/* UNPROTECTED ROUTES */}
      <RouteWithLayout exact path={ROUTES.ROOT} component={Landing} layout={AuthLayout} />
      <RouteWithLayout exact path={ROUTES.SIGN_IN} component={SignIn} layout={AuthLayout} />
      <RouteWithLayout exact path={ROUTES.SIGN_UP} component={SignUp} layout={AuthLayout} />

      {/* PROTECTED ROUTES */}
      <ProtectedRouteWithLayout exact path={ROUTES.DASHBOARD} component={Dashboard} layout={AppLayout} />
      <ProtectedRouteWithLayout exact path={ROUTES.SETTINGS} component={Settings} layout={AppLayout} />

      {/* OTHER ROUTES */}
      <RouteWithLayout path={ROUTES.CATCH_ALL} component={NotFound} layout={AuthLayout} />
    </Switch>
  </BrowserRouter>
);

export default Router;
