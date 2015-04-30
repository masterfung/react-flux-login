import React from 'react/addons';
import ReactMixin from 'react-mixin';
import { Jumbotron, Button, Input } from 'react-bootstrap';
import Auth from '../services/AuthService'

export default class Signup extends React.Component {

  constructor(props) {
    this.signup = this.signup.bind(this);
    this.state = {
      user: '',
      password: ''
    };
  }

  signup(e) {
    e.preventDefault();
    Auth.signup(this.state.user, this.state.password, this.state.extra)
      .catch(function(err) {
        alert("There's an error logging in. Check the console for errors.");
        console.log("Error logging in", err);
      });
  }

  render() {
    return (
      <Jumbotron className="login">
        <h1>Signup</h1>
        <form role="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Input type="text" valueLink={this.linkState('user')} className="form-control" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Input type="password" valueLink={this.linkState('password')} className="form-control" id="password" ref="password" placeholder="Password" />
        </div>
        <Button type="submit" onClick={this.signup}>Submit</Button>
      </form>
    </Jumbotron>
    );
  }
}

reactMixin(Signup.prototype, React.addons.LinkedStateMixin);
