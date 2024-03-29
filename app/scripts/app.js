/* global app:true */

'use strict';

/**
 * @ngdoc overview
 * @name angNewsSiteApp
 * @description
 * # angNewsSiteApp
 *
 * Main module of the application.
 */


var app = angular.module('angNewsSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
