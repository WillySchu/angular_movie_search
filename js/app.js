angular.module('app', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/home.html'
    }).when('/result', {
      templateUrl: 'partials/result.html'
    })
    $locationProvider.html5Mode(true);
  })
