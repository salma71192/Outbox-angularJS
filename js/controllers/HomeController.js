app.controller('HomeController', ['$scope', 'emails', function($scope) {
  emails.success(function(data) {
    $scope.emails = data;
  });
}]);