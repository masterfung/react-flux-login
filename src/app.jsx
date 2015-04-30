import Router from 'react-router';
let {Route} = Router;
import AuthenticatedApp from './components/AuthenticatedApp';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import React from 'react';
import RouterContainer from './services/RouterContainer';
import LoginActions from './actions/LoginActions';

let routes = (
  <Route handler={AuthenticatedApp}>
    <Route name="login" handler={Login}/>
    <Route name="signup" handler={Signup}/>
    <Route name="home" path="/" handler={Home}/>
  </Route>
);

let router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) {
  LoginActions.loginUser(jwt);
}

router.run((Handler) => {
  React.render(
      <Handler />,
      document.getElementById('content'));
});

