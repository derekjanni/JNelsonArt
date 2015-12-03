app.controller('SerieController', ['$scope', 'series', '$routeParams', function($scope, series, $routeParams) {
  series.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);