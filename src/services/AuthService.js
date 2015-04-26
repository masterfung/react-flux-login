/**
 * Created by htm on 4/26/15.
 */
import request from 'reqwest'

class AuthService {
	login(username, password) {
		return when(request({
			url: 'http://localhost:3001/sessions/create',
			method: "POST",
			crossOrigin: true,
			type: 'json',
			data: {
				username, password
			}
		}))
		.then((response) => {
				let jwt = response.id_token;
				LoginActions.loginUser(jwt);
				return true;
			});
	}
}

export default new AuthService()