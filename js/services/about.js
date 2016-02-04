app.factory('about', ['$http', function($http) {
	    return $http.get('/api/about')
		.success(function(data) {
			// modify image path to usable url                                                                                                                         
			for (i = 0; i < data.length; i++){
			    data[i]['data']['image'] = data[i]['data']['image'].replace('site:', 'http://cockpit.joynelson.com/')
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