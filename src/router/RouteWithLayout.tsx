/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
/* -------------------------------------------------------------------------- */

type RouteWithLayoutProps = Omit<RouteProps, 'component'> & {
  component: React.ReactType;
  layout: React.ReactType;
};

const RouteWithLayout: React.FC<RouteWithLayoutProps> = props => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={propsInner => (
        <Layout>
          <Component {...propsInner} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
