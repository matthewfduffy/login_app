var app = angular.module('app', ['ngRoute', 'ngCookies'])
app.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "partials/login.html",
    controller: "userController"
  })
  .when('/home', {
    templateUrl: "partials/indexx.html",
    controller: "indexController"
  })
  .when('/create', {
    templateUrl: "partials/add-poll.html",
    controller: "addController"
  })
  .when('/poll/:id', {
    templateUrl: "partials/poll.html",
    controller: "pollController"
  })
  .otherwise({
    redirectTo: '/'
});
});
