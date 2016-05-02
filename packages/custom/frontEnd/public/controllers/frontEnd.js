(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.frontEnd')
    .controller('FrontEndController', FrontEndController);

  FrontEndController.$inject = ['$scope', 'Global', 'FrontEnd'];

  function FrontEndController($scope, Global, FrontEnd) {
    debugger;
    $scope.global = Global;
    $scope.package = {
      name: 'frontEnd'
    };
  }
})();