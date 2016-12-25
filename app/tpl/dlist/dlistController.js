(function(angular) {
    angular.module('dlistModel', ['jsonpModel'])
        .controller('dlistController', [
            '$scope',
            'jsonpService',
            'AppConfig',
            '$stateParams',
            '$rootScope',
            function($scope, jsonpService, AppConfig, $stateParams,$rootScope) {
                $scope.data = {}
                console.log($rootScope)
                sd=$rootScope.seatext==''?{}:{q:$rootScope.seatext}
                jsonpService.jsonp(AppConfig.movieinitApi + $stateParams.type, sd, function(data) {
                    $scope.data = data;
                    $scope.data.total = '共' + data.total + '条结果';
                    $scope.$apply();
                })

            }
        ])
})(angular)
