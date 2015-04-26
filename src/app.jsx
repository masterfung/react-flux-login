//import Home from './components/Home';
import React from 'react';
import Router from 'react-router';
import Login from './components/Login';
import Home from './components/Home';
import AuthenticatedApp from './components/AuthenticatedApp';
import RouterContainer from './services/RouterContainer';
import LoginActions from './actions/LoginActions';

let {Route} = Router;

let routes = (
    <Route handler={AuthenticatedApp}>
      <Route name="login" handler={Login} />
      <Route name="signup" handler={Signup} />
      <Route name="home" path="/" handler={Home} />
    </Route>
);

let router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');

if (jwt) {
  LoginActions.loginUser(jwt);
}

router.run(function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});
