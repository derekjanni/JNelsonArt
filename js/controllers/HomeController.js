app.controller('HomeController', ['$scope', 'series', '$http', '$fancyModal', function($scope, series, $http, $fancyModal) {
    series.success(function(data) {

        // main series display
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

        // main about display
        $scope.get_about = function(){
            return $http.get('/api/about')
            .success(function(data) {
                // modify image path to usable url
                $scope.about = data[0];
            })
              .error(function(data) {
                return data;
               });
            }
        $scope.about = $scope.get_about();

        // contact form mail handler
        $scope.openModal = function () {
            console.log("open modal hit");
            $fancyModal.open({ templateUrl: 'contact.html' });
        };

        $scope.sendMail = function(mail){
                if ($scope.contactform.$valid) {
                        $http.post('api/contact', mail)
                        .success(function(data){})
                        .error(function(data){ console.log("error") });
                    alert('Our form is amazing');
                }
                else{
                    alert('Fill out the form before you submit!');
                }
        }
        // contact form reset
        resetForm = function(){
        document.getElementById("contactform").reset();
    }
    });
}]);
