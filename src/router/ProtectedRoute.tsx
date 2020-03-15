/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import ROUTES from 'router/routes';
import auth from 'auth';
/* -------------------------------------------------------------------------- */

type ProtectedRouteProps = Omit<RouteProps, 'component'> & {
  component: React.ReactType;
};

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={propsInner =>
        auth.isAuthenticated() ? (
          <Component {...propsInner} />
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.AUTH.SIGN_IN,
              state: { referrer: propsInner.location.pathname },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
