app.controller('AboutController', ['$scope', 'about', '$http', function($scope, about, $http) {
	    series.success(function(data) {
    $scope.get_about = function(){
    	return $http.get('/api/about')
    	.success(function(data) {
            // modify image path to usable url
            console.log(data);
	        $scope.about = data;
	    })
      .error(function(data) {
        return data;
       });
		}
	$scope.about = $scope.get_about();
	});	
}]);
