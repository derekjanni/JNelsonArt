app.controller('SerieController', ['$scope', 'series', '$http', '$routeParams', function($scope, series, $http, $routeParams) {
  series.success(function(data) {
    $scope.detail = data[$routeParams.id];
    console.log($scope.detail['data'].title);
    $scope.get_arts = function(){
    	return $http.get('http://www.joynelson.com/cockpit/rest/api/galleries/get/Art?token=25a01fb2eb534c8830882257')
    	.success(function(data) {
            // modify image path to usable url
            for (i = 0; i < data.length; i++){ 
              		data[i]['data']['image'] = data[i]['data']['image'].replace('site:', 'http://joynelson.com/')
            }	
	         $scope.arts = data;
	    })
          .error(function(data) {
            return data;
           });;
		}
	$scope.arts = $scope.get_arts();
	console.log($scope.arts);
	});	
}]);