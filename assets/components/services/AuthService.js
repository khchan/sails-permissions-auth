angular.module('app.auth', ['ngResource'])
	.constant('AUTH_API', 'http://localhost:1337/auth')
	.constant('LOGIN_API', 'http://localhost:1337/auth/local')
    .constant('REGISTER_API', 'http://localhost:1337/auth/local/register')
    .service('AuthService', ['AUTH_API', 'LOGIN_API', 'REGISTER_API', '$resource',
	function AuthService(authURL, loginURL, registerURL, $resource) {
		'use strict';

		var LoginAuth    = $resource(loginURL);
		var RegisterAuth = $resource(registerURL);
		var Auth         = $resource(authURL);

		this.authorized = false;

		this.login = function(data, onSuccess, onError) {
			var state = new LoginAuth(data);
			state.$save().then(onSuccess).catch(onError);
		};

		this.register = function(data, onSuccess, onError) {
			var state = new RegisterAuth(data);
			state.$save().then(onSuccess).catch(onError);
		};
	}
]);	