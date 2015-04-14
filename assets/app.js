'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.view1',
	'myApp.view2',
	'myApp.version'
]).
config(['$routeProvider', function ($httpProvider, $routeProvider) {
	$httpProvider.interceptors.push('httpRequestInterceptor');
	$routeProvider.otherwise({redirectTo: '/view2'});
}]).
factory('httpRequestInterceptor', function($q, $location) {
    var key = '';
	return {
		'request': function(config) {
			return config;
		},
      	'responseError': function(rejection) {
      		if (rejection.)
	        if (rejection.status >= 400 && rejection.status < 500) {
	        	$location.path('/400');
	        	return $q.reject(rejection);
	        }

	        if (rejection.status > 500) {
	        	$location.path('/500');
	        	return $q.reject(rejection);
	        }
      	}
    };
});

