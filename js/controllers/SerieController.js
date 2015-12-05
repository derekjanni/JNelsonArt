app.controller('SerieController', ['$scope', '$http', 'series', '$routeParams', function($scope, $http, series, $routeParams) {
  series.success(function(data) {
    $scope.detail = data[$routeParams.id];
    //console.log($scope.detail['data'].title);
	});	
   $scope.get_arts = function()
   {
    	$scope.arts = "hi";
    	console.log('hi');
    };
   console.log(eval($scope.arts));
}]);

