(function () {
  'use strict';

  angular
  .module('mean.frontEnd')
  .config(frontEnd);

  frontEnd.$inject = ['$stateProvider'];

  function frontEnd($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'frontEnd/views/home.html'
    });
  }

})();
