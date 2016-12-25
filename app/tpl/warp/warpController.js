;(function(angular) {
    angular.module('warpModel', ['jsonpModel'])
        .controller('warpController',['$scope','jsonpService','AppConfig', function($scope,jsonpService, AppConfig){
            $scope.in_theaters = []; //正在热映
            $scope.coming_soon = []; //即将上映
            $scope.top250 = []; //top250
            $scope.weekly = []; //口碑榜
            $scope.us_box = []; //北美票房榜
            $scope.new_movies = []; //新片榜
            jsonpService.jsonp(AppConfig.in_theatersApi, {count:4}, function(data) {
            	$scope.in_theaters=data.subjects;
            	$scope.$apply()
            })
            jsonpService.jsonp(AppConfig.coming_soonApi, {count:4}, function(data) {
            	$scope.coming_soon=data.subjects;
            	$scope.$apply()
            })
            jsonpService.jsonp(AppConfig.top250Api, {count:4}, function(data) {
            	$scope.top250=data.subjects;
            	$scope.$apply()
            })
            jsonpService.jsonp(AppConfig.weeklyApi, {count:4}, function(data) {
            	$scope.weekly=data.subjects;
            	$scope.$apply()
            })
            jsonpService.jsonp(AppConfig.us_boxApi, {count:4}, function(data) {
            	$scope.us_box=data.subjects;
            	$scope.$apply()
            })
            jsonpService.jsonp(AppConfig.new_moviesApi, {count:4}, function(data) {
            	$scope.new_movies=data.subjects;
            	$scope.$apply()
            })
        }])
})(angular)
