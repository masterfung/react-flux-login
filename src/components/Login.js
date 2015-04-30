import React from 'react/addons';
import ReactMixin from 'react-mixin';
import { Jumbotron, Button } from 'react-bootstrap';
import Auth from '../services/AuthService';

export default class Login extends React.Component {

  constructor() {
    this.state = {
      user: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        alert("Oops, there is a problem logging you in. Try again.");
        console.log("Error logging in", err);
      });
  }

  render() {
    return (
      <Jumbotron className="login">
        <h1>Login</h1>
        <form role="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" valueLink={this.linkState('user')} className="form-control" id="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" valueLink={this.linkState('password')} className="form-control" id="password" ref="password" placeholder="Password" />
          </div>
          <Button type="submit" onClick={this.login.bind(this)}>Submit</Button>
        </form>
      </Jumbotron>
    );
  }
}

reactMixin(Login.prototype, React.addons.LinkedStateMixin);
