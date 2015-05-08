import React from 'react/addons';
import LoginStore from '../stores/LoginStore';
import { Nav, Navbar, NavItem, MenuItem, Button } from 'react-bootstrap';
import { Route, RouteHandler, Link } from 'react-router';
import AuthService from '../services/AuthService';

export default class AuthenticatedApp extends React.Component {
  constructor() {
    this.state = this._getLoginState();
  }

  _getLoginState() {
    return {
      userLoggedIn: LoginStore.isLoggedIn()
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  render() {
    return (
      <Navbar brand='React Flux Login' inverse toggleNavKey={0}>
        <Nav right eventKey={0}> {/* This is the eventKey referenced */}
          {this.headerItems}
        </Nav>
        <RouteHandler/>
      </Navbar>
    );
  }

  logout(e) {
    e.preventDefault();
    AuthService.logout();
  }

  get headerItems() {
    if (!this.state.userLoggedIn) {
      return (
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="signup">Signup</Link>
          </li>
        </ul>
      </div>       )
    } else {
      return (
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <a href="" onClick={this.logout}>Logout</a>
          </li>
        </ul>
      </div>
            )
    }
  }
}
