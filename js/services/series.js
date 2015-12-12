app.factory('series', ['$http', function($http) {
  return $http.get("/api/series")
          .success(function(data) {
            // modify image path to usable url
            for (i = 0; i < data.length; i++){ 
              data[i]['data']['image'] = data[i]['data']['image'].replace('site:', 'http://joynelson.com/')
            }
            console.log(data);
	          return data;
	    })
          .error(function(data) {
            return data;
           });
}]);

