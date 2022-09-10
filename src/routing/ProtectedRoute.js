import React from 'react';
import { Redirect } from 'react-router';

const ProtectedRoute = (props) => {
  let ProtectedComponent = props.component;
  //collect LoginToken
  let isLoggedIn = window.localStorage.getItem('loginToken');
  console.log(isLoggedIn);
  return isLoggedIn ? <ProtectedComponent /> : <Redirect to='/login' />;
};
export default ProtectedRoute;
