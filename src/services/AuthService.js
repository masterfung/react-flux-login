/**
 * Created by htm on 4/26/15.
 */
import request from 'reqwest';
import when from 'when';
import LoginActions from '../actions/LoginActions';
import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants';

class AuthService {

	login(username, password) {
		return this.handleAuth(when(request({
			url: LOGIN_URL,
			method: 'POST',
			crossOrigin: true,
			type: 'json',
			data: {
				username, password
			}
		})));
	}

	logout() {
		LoginActions.logoutUser();
	}

	signup(username, password, extra) {
		return this.handleAuth(when(request({
			url: SIGNUP_URL,
			method: 'POST',
			crossOrigin: true,
			type: 'json',
			data: {
				username, password, extra
			}
		})));
	}

	handleAuth(loginPromise) {
		return loginPromise
			.then(function(response) {
				var jwt = response.id_token;
				LoginActions.loginUser(jwt);
				return true;
			});
	}
}

export default new AuthService()