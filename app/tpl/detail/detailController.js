(function(angular) {
    angular.module('detailModel', ['jsonpModel'])
        .controller('detailController', [
            '$scope',
            'jsonpService',
            'AppConfig',
            '$stateParams',
            function($scope, jsonpService, AppConfig, $stateParams) {
            	$scope.loading=true;
                jsonpService.jsonp(AppConfig.subjectApi + $stateParams.id, {}, function(data) {
                    $scope.data = data;
                    $scope.loading=false
                    $scope.$apply();
                })

            }
        ])
})(angular)
