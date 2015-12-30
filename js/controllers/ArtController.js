app.controller('ArtController', ['$scope', 'arts', '$routeParams', function($scope, arts, $routeParams) {
  arts.success(function(data) {
    $scope.sub_detail = data[$routeParams.id];
    console.log($scope.sub_detail);
  });
}]);