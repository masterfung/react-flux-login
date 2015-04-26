//import Home from './components/Home';
import React from 'react';
import Router from 'react-router';
import Login from './components/Login';
import Home from './components/Home';

let {Route} = Router;

let jwt = localStorage.getItem('jwt');

if (jwt) {
  LoginActions.loginUser(jwt);
}

React.render(
  <Home />,
  document.getElementById('content')
);
