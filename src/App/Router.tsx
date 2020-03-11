import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from 'App/ProtectedRoute';
import ROUTES from 'constants/routes';
import LandingPage from 'pages/LandingPage/LandingPage';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import SignInPage from 'pages/SignInPage/SignInPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
/* -------------------------------------------------------------------------- */

const Router: React.FC<{}> = () => (
  <BrowserRouter>
    <Switch>
      {/* UNPROTECTED ROUTES */}
      <Route exact path={ROUTES.ROOT} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />

      {/* PROTECTED ROUTES */}
      <ProtectedRoute exact path={ROUTES.DASHBOARD} component={DashboardPage} />

      {/* OTHER ROUTES */}
      <Route path={ROUTES.CATCH_ALL} component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
