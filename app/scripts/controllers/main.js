'use strict';

/**
 * @ngdoc function
 * @name angNewsSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angNewsSiteApp
 */
angular.module('angNewsSiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
