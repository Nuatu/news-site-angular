'use strict';

/**
 * @ngdoc function
 * @name angNewsSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angNewsSiteApp
 */
angular.module('angNewsSiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
