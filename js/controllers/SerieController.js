app.controller('SerieController', ['$scope', 'series', '$http', '$routeParams', function($scope, series, $http, $routeParams) {
  series.success(function(data) {
    $scope.detail = data[$routeParams.id];
    $scope.get_arts = function(){
        return $http.get('/api/art')
	.success(function(data) {
            // modify image path to usable url
            var output = [];
            for (i = 0; i < data.length; i++){ 
                if($scope.detail['data'].title === data[i]['data'].series){
              		data[i]['data']['image'] = data[i]['path'].replace('site:', 'http://cockpit.joynelson.com/');
                  output.push(data[i]);
              }	
	         $scope.arts = output;
	         }
         })
          .error(function(data) {
            return data;
         });
		}
    
	$scope.arts = $scope.get_arts();
	});	
}]);