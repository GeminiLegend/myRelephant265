'use strict';

//Setting up route
angular.module('mean.frontEnd').config(['$stateProvider', function($stateProvider) {
	console.log('setting up state');
    // states for users
    $stateProvider
    .state('home', {
        url: '',
        templateUrl: 'frontEnd/views/home.html'
    })
    .state('articles', {
    	url: '',
    	templateUrl: 'frontEnd/views/home.html'
    })
    .state('link', {
    	url: '',
    	templateUrl: 'frontEnd/views/link.html'
    })
    .state('profile', {
        url: '/profile',
        templateUrl: 'frontEnd/views/profile.html'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'frontEnd/views/login.html'
    })
  }
]);
