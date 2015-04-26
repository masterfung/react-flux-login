/**
 * Created by htm on 4/26/15.
 */
import React from 'react/addons';
import LoginStore from '../stores/LoginStore';

export default (ComposedComponent) => {
	return class AuthenticatedComponent extends React.Component {
		static willTransitionTo(transition) {
			if (!LoginStore.isLoggedIn()) {
				transition.redirect('/');
			}
		}
		constructor() {
			this.state = this._getLoginState();
		}

		_getLoginState() {
			return {
				userLoggedIn: LoginStore.isLoggedIn(),
				user: LoginStore.user,
				jwt: LoginStore.jwt
			};
		}

		componentDidMount() {
			LoginStore.addChangeListener(this._onChange.bind(this));
		}

		_onChange() {
			this.setState(this._getLoginState());
		}

		componentWillUnmount() {
			LoginStore.removeChangeLister(this._onChange.bind(this));
		}

		return() {
				return (
					<ComposedComponent
						{...this.props}
						user={this.state.user}
					    jwt={this.state.jwt}
					    userLoggedIn={this.state.userLoggedIn}
						/>
				);
		}

	}
}