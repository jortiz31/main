var app = angular.module('projects', [ ]);

app.controller("ProjectSearchController", [
          "$scope", "$http",
    function($scope, $http) {

      var page = 0;

      $scope.projects = [];
      $scope.search = function(searchTerm){
        $http.get("/projects.json", {"params": {"keywords": searchTerm}}
      ).then(function(response){
          $scope.projects = response.data;
      }, function(response) {
          console.log("error: " + response.data)
        }
      );
    }
  }
]);
