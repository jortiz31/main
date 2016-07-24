var app = angular.module('iceberg', ['ngRoute', 'templates']);

app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'index.html',
        controller: 'IndexController'
      }).when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutController'
      }).when('/projects', {
        templateUrl: 'projects.html',
        controller: 'ProjectsController'
      }).when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactController'
      }).when('/search', {
        templateUrl: 'project_search.html',
        controller: 'ProjectSearchController'
      }).when('/:id', {
        templateUrl: 'project_detail.html',
        controller: 'ProjectDetailController'
      });
    }
])





// app.config(["$routeProvider",
//   function($routeProvider) {
//     $routeProvider.when("/", {
//       contoller: "ProjectSearchController",
//       templateUrl: "project_search.html"
//     }).when("/:id", {
//       controller: "ProjectDetailController",
//       templateUrl: "project_detail.html"
//     });
//   }
// ]);

app.controller("IndexController",[
        "$scope", "$http", "$location",
    function($scope, $http, $location){
      console.log("Index ctrl working!");
    }
]);

app.controller("AboutController",[
        "$scope", "$http", "$location",
    function($scope, $http, $location){
      console.log("about ctrl working!");
    }
]);

app.controller("ProjectsController",[
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

app.controller("ProjectSearchController", [
          "$scope", "$http", "$location",
    function($scope, $http, $location) {

      var page = 0;

      // search method
      $scope.projects = [];
      $scope.search = function(searchTerm) {
        if (searchTerm.length < 3) {
          return;
        }
        $http.get("/projects.json", {"params": {"keywords": searchTerm, "page": page}}
        ).then(function(response){
          $scope.projects = response.data;
        }, function(response) {
            console.log("error: " + response.data)
          }
        );
      }

      // previous page method
      $scope.previousPage = function(){
        if(page > 0){
          page = page - 1;
          $scope.search($scope.keywords);
        }
      }

      // next page method
      $scope.nextPage = function() {
        page = page + 1;
        $scope.search($scope.keywords);
      }

      // view details method
      $scope.viewDetails = function(project) {
        $location.path("/" + project.id);
      }
  }
]);

app.controller("ProjectDetailController", [
          "$scope", "$http", "$routeParams",
    function($scope,$http,$routeParams) {
      var projectId = $routeParams.id;
      $scope.project = {};

      $http.get(
        "/projects/" + projectId + ".json"
      ).then(function(response) {
          $scope.project = response.data;
        },function(response) {
          console.log("error: " + response.data);
        }
    );
  }
]);
