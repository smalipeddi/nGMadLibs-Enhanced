myapp = angular.module('MyApp', []);
myapp.controller('ngMadLibsCtrl', ['$scope','$attrs', function($scope,$attrs) {
  $scope.submitForm = function(isValid) {
    if (isValid) {
        $scope.myVar = !$scope.myVar;
    }

    

  }



}]);
