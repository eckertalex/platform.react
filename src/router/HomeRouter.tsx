import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HOME } from 'router/routes';
import HomeLayout from 'layouts/homeLayout/HomeLayout';
import Landing from 'pages/Landing';
import About from 'pages/About';
/* -------------------------------------------------------------------------- */

const HomeRouter: React.FC = () => (
  <HomeLayout>
    <Switch>
      <Route exact path={HOME.BASE} component={Landing} />
      <Route path={HOME.ABOUT} component={About} />
      <Redirect to={HOME.BASE} />
    </Switch>
  </HomeLayout>
);

export default HomeRouter;
