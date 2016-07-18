var app = angular.module('siteApp', ['ngRoute', 'templates']);

app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when("/", {
        contoller: "SiteController",
        templateUrl: "splash.html"
      }).when("/about", {
        controller: "SiteController",
        templateUrl: "about.html"
      }).when("/portfolio", {
        controller: "SiteController",
        templateUrl: "portfolio.html"
      }).when("/contact", {
        controller: "SiteController",
        templateUrl: "contact.html"
      });
    }
]);
