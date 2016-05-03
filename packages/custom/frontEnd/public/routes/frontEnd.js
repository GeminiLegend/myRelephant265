'use strict';

//Setting up route
angular.module('mean.frontEnd').config(['$stateProvider', function($stateProvider) {
	console.log('setting up state');
    // states for users
    $stateProvider.state('home', {
        url: '',
        templateUrl: 'frontEnd/views/home.html'
      })
  }
]);
