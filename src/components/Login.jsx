import React from 'react/addons';
import ReactMixin from 'react-mixin';
import { Jumbotron } from 'react-bootstrap';
import Auth from '../services/AuthService'

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
        alert("There's an error logging in");
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
            <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
          </form>
    </Jumbotron>
    );
  }
}

reactMixin(Login.prototype, React.addons.LinkedStateMixin);