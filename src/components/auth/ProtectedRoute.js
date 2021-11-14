// auth/ProtectedRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';


//its a component that returns a component, we are abstracting infor through props 
const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  console.log({ component: Component, user, rest });
//we check the props we receive and render different components, if user logged in we want to render the component with props
  if (user) {
    return <Route {...rest} render={routeProps => <Component {...routeProps} userData={user} />} />;
  } else {
    return <Redirect to={{ pathname: '/', state: { from: rest.location } }} />;
  }
};

export default ProtectedRoute;
