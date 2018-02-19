import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// the component name change to Component with capilized letter
export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route {...rest} component={(props) => {
      return (
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
    )}}/>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
