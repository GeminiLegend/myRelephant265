(function () {
  'use strict';

  angular
    .module('mean.frontEnd')
    .config(frontEnd);

  frontEnd.$inject = ['$stateProvider'];

  function frontEnd($stateProvider) {
    $stateProvider.state('frontEnd example page', {
      url: '/frontEnd/example',
      templateUrl: 'frontEnd/views/index.html'
    });
  }

})();
