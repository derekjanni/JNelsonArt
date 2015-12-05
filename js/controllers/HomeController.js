app.controller('HomeController', ['$scope', 'series', function($scope, series) {
  series.success(function(data) {
    $scope.series = data;
    $scope.feedLimit = 4;
    $scope.scroll = function() { 
		$scope.feedLimit += 4; 
    };
    });
}]);