(function(angular) {
    angular.module('dlistModel', ['jsonpModel'])
        .controller('dlistController', [
            '$scope',
            'jsonpService',
            'AppConfig',
            '$stateParams',
            '$rootScope',
            function($scope, jsonpService, AppConfig, $stateParams, $rootScope) {
                $scope.data = {}
                $scope.start = 0;
                $scope.conut = 30;
                $scope.dropDown=false;
                sd = $rootScope.seatext == '' ? { start: $scope.start } : { q: $rootScope.seatext, start: 0 }
                jsonpService.jsonp(AppConfig.movieinitApi + $stateParams.type, sd, function(data) {
                    $scope.data = data;
                    $scope.data.total = '共' + data.total + '条结果';
                    $scope.$apply();
                })
                $(window).scroll(function(event) {
                    if ($(document).height() - $(window).scrollTop() - $(window).height() <= 20 && $scope.dropDown==false) {
                    	$scope.dropDown=true;
                    	$scope.$apply();
                        sd = $rootScope.seatext == '' ? { start: $scope.start, count: $scope.conut } : { q: $rootScope.seatext, start: $scope.start, count: $scope.conut }
                        jsonpService.jsonp(AppConfig.movieinitApi + $stateParams.type, sd, function(data) {
                            $scope.data = data;
                            $scope.data.total = '共' + data.total + '条结果';
                            $scope.conut += 10;
                            $scope.dropDown=false;
                            $scope.$apply();
                        })
                    }

                });
            }
        ])
})(angular)
