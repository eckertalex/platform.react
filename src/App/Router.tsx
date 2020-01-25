import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
      <Route exact path={ROUTES.ROOT} component={LandingPage}></Route>
      <Route path={ROUTES.SIGN_IN} component={SignInPage}></Route>
      <Route path={ROUTES.SIGN_UP} component={SignUpPage}></Route>

      {/* PROTECTED ROUTES */}
      <Route path={ROUTES.DASHBOARD} component={DashboardPage}></Route>

      {/* OTHER ROUTES */}
      <Route path={ROUTES.CATCH_ALL} component={NotFoundPage}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
