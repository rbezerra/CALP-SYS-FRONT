'use strict';

/**
 * @ngdoc function
 * @name calpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the calpApp
 */
angular.module('calpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
