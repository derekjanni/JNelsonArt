app.factory('series', ['$http', function($http) {
  return $http.get('http://www.joynelson.com/cockpit/rest/api/galleries/get/Series?token=25a01fb2eb534c8830882257') 
  //return $http.get("/api/series")
          .success(function(data) {
            // modify image path to usable url
            for (i = 0; i < data.length; i++){ 
              data[i]['data']['image'] = data[i]['data']['image'].replace('site:', 'http://joynelson.com/')
            }
	          return data;
	    })
          .error(function(data) {
            return data;
           });
}]);

