var app = angular.module('projects', ['ngRoute', 'templates']);

app.config(["$routeProvider",
  function($routeProvider) {
    $routeProvider.when("/", {
      contoller: "ProjectSearchController",
      controllerAs: "ProjectSearchCtrl",
      templateUrl: "project_search.html"
    }).when("/:id", {
      controller: "ProjectDetailController",
      controllerAs: "ProjectDetailCtrl",
      templateUrl: "project_detail.html"
    });
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
