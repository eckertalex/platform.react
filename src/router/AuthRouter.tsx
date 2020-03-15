import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AUTH } from 'router/routes';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import HomeLayout from 'layouts/homeLayout/HomeLayout';
/* -------------------------------------------------------------------------- */

const AuthRouter: React.FC = () => (
  <HomeLayout>
    <Switch>
      <Route path={AUTH.SIGN_IN} component={SignIn} />
      <Route path={AUTH.SIGN_UP} component={SignUp} />
      <Redirect to={AUTH.SIGN_IN} />
    </Switch>
  </HomeLayout>
);

export default AuthRouter;
