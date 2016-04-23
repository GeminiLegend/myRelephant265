(function () {
  'use strict';

  angular
    .module('mean.articles')
    .config(articles);

  articles.$inject = ['$stateProvider'];

  function articles($stateProvider) {
    $stateProvider.state('articles example page', {
      url: '/articles/example',
      templateUrl: 'articles/views/index.html'
    });
  }

})();
