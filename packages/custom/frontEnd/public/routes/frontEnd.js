(function () {
  'use strict';

  angular
    .module('mean.frontEnd')
    .config(frontEnd);

  frontEnd.$inject = ['$stateProvider'];

  function frontEnd($stateProvider) {
    $stateProvider.state('frontEnd example page', {
      url: '/login',
      templateUrl: 'frontEnd/views/login.html'
    });
  }

})();
