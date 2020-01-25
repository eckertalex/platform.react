import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import auth from 'utils/auth';
import ROUTES from 'constants/routes';
/* -------------------------------------------------------------------------- */

type ProtectedRouteProps = Omit<RouteProps, 'component'> & { component: React.ReactType };

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props: ProtectedRouteProps) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props): React.ReactNode =>
        auth.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: ROUTES.ROOT, state: props.location }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
