import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTES from 'constants/routes';
import LandingPage from 'pages/LandingPage/LandingPage';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
/* -------------------------------------------------------------------------- */

const App: React.FC<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.ROOT} component={LandingPage}></Route>
      <Route path={ROUTES.DASHBOARD} component={DashboardPage}></Route>
      <Route path={ROUTES.CATCH_ALL} component={NotFoundPage}></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
