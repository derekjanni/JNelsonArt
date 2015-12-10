app.controller('HomeController', ['$scope', 'series', '$http', function($scope, series, $http) {
    series.success(function(data) {
        $scope.series = data;
        $scope.seriesLength = $scope.series.length;
        $scope.feedLimit = 4;
        $scope.scroll = function() {
            if ($scope.feedLimit <= $scope.seriesLength) {
                $scope.feedLimit += 4;
            } else {
                $scope.feedLimit -= 4;
            }
        };
        $scope.get_about = function(){
            return $http.get('http://www.joynelson.com/cockpit/rest/api/collections/get/about?token=25a01fb2eb534c8830882257')
            .success(function(data) {
                // modify image path to usable url
                $scope.about = data[0];
            })
              .error(function(data) {
                return data;
               });;
            }
        $scope.about = $scope.get_about();
        console.log($scope.about);
        //console.log($scope.about.image);
    });
}]);