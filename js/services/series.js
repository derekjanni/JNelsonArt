app.factory('series', ['$http', function($http) {
  return $http.get('http://www.joynelson.com/cockpit/rest/api/galleries/get/Series?token=25a01fb2eb534c8830882257') 
          .success(function(data) {
            // modify image path to usable url
            for (i = 0; i < data.length; i++){ 
              data[i]['data']['image'] = data[i]['data']['image'].replace('site:', 'http://joynelson.com/')
            }
            
            // transform goofy JSON inputs into usable JSON
            json_data = []
            for (i = 0; i < data.length; i++){
              json_data.push(data[i]['data'])
            }

	          return data;
	         })
          .error(function(data) {
            return data;
           });
}]);

