app.controller('HomeController', ['$scope', 'series', function($scope, series) {
  series.success(function(data) {
    $scope.series = data;
  });
}]);