app.factory('arts', ['$http', function($http) {
	    return $http.get('/api/arts')
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
	    return json_data;
		    })
		.error(function(data) {
			return data;
		    });
	}]);
