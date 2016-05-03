(function () {
  'use strict';

  /* jshint -W098 */
angular
.module('mean.frontEnd')
.controller('FrontEndController', ['$scope', 'Global', FrontEndController]);

    function FrontEndController($scope, Global) {
        console.log('Paul is bad at ufc');
        $scope.global = Global;
        $scope.package = {
            name: 'frontEnd'
        };
    }
})();