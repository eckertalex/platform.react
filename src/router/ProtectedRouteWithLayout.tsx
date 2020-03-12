/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import ROUTES from 'router/routes';
import auth from 'auth';
/* -------------------------------------------------------------------------- */

type ProtectedRouteWithLayoutProps = Omit<RouteProps, 'component'> & {
  component: React.ReactType;
  layout: React.ReactType;
};

const ProtectedRouteWithLayout: React.FC<ProtectedRouteWithLayoutProps> = props => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={propsInner =>
        auth.isAuthenticated() ? (
          <Layout>
            <Component {...propsInner} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.SIGN_IN,
              state: { referrer: propsInner.location.pathname },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRouteWithLayout;
