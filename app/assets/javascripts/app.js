var app = angular.module('siteApp', ['ngRoute', 'templates', 'ngAnimate']);

app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when("/", {
        contoller: "SiteController",
        templateUrl: "splash.html"
      }).when("/about", {
        controller: "AboutController",
        templateUrl: "about.html"
      }).when("/portfolio", {
        controller: "PortfolioController",
        templateUrl: "portfolio.html"
      }).when("/contact", {
        controller: "ContactController",
        templateUrl: "contact.html"
      });
    }
]);

app.controller("SiteController",[
        "$scope", "$http", "$location",
    function($scope, $http, $location){
      console.log("Site ctrl working!");
    }
]);

app.controller("AboutController",[
        "$scope", "$http", "$location",
    function($scope, $http, $location){
      console.log("about ctrl working!");
    }
]);

app.controller("PortfolioController",[
        "$scope", "$http", "$location",
    function($scope, $http, $location){
      console.log("folio ctrl working!");
    }
]);

app.controller("ContactController",[
        "$scope", "$http", "$location",
    function($scope, $http, $location){
      console.log("contact ctrl working!");
    }
]);
