(function () {
  'use strict';

  angular
    .module('mean.frontEnd')
    .factory('FrontEnd', FrontEnd);

  FrontEnd.$inject = [];

  function FrontEnd() {
    return {
      name: 'frontEnd'
    };
  }
})();
