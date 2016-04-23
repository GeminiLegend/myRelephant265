(function () {
  'use strict';

  angular
    .module('mean.articles')
    .factory('Articles', Articles);

  Articles.$inject = [];

  function Articles() {
    return {
      name: 'articles'
    };
  }
})();
