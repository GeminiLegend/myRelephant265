(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.articles')
    .controller('ArticlesController', ArticlesController);

  ArticlesController.$inject = ['$scope', 'Global', 'Articles'];

  function ArticlesController($scope, Global, Articles) {
    $scope.global = Global;
    $scope.package = {
      name: 'articles'
    };
  }
})();