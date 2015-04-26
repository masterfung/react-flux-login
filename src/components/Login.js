/**
 * Created by htm on 4/25/15.
 */
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService';

export default class Login extends React.Component {
	constructor() {
		this.state = {
			user: "",
			password: ""
		};
	}

	login(e) {
		e.preventDefault();
		Auth.login(this.state.user, this.state.password)
			.catch((err) => {
				console.log("Error loggin in", err);
			});

	}

	render() {
		return (
		<div className="login jumbotron center-block">
			<h1>Login</h1>
			<form role="form">
				<div className="form-group">
					<input type="text" valueLink={this.linkState('user')} placeholder="Username"/>

					<input type="password" valueLink={this.linkState('password')} placeholder="Password"/>
					<button type="submit" onClick={this.login.bind(this)}>Submit</button>
				</div>
			</form>
		</div>
		)
	}
}

reactMixin(Login.prototype, React.addons.LinkedStateMixin);
