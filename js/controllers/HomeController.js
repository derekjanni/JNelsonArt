app.controller('HomeController', ['$scope', 'series', function($scope, series) {
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

    });
}]);