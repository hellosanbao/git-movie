;
(function(angular) {
    angular.module('app', ['routeConfModel', 'warpModel', 'dlistModel', 'detailModel', 'jsonpModel'])
        .constant('AppConfig', {
            movieinitApi: 'https://api.douban.com/v2/movie/',
            searchApi: 'https://api.douban.com/v2/movie/search',
            subjectApi: 'https://api.douban.com/v2/movie/subject/',
            in_theatersApi: 'https://api.douban.com/v2/movie/in_theaters',
            coming_soonApi: 'https://api.douban.com/v2/movie/coming_soon',
            top250Api: 'https://api.douban.com/v2/movie/top250',
            weeklyApi: 'https://api.douban.com/v2/movie/weekly',
            us_boxApi: 'https://api.douban.com/v2/movie/us_box',
            new_moviesApi: 'https://api.douban.com/v2/movie/new_movies',
            bookListApi: 'https://api.douban.com/v2/book',
        })
        .controller('mainController', [
            '$scope',
            'AppConfig',
            'jsonpService',
            '$location',
            '$rootScope',
            function($scope, AppConfig, jsonpService,$location,$rootScope) {
                $scope.showdow = false;
                $scope.changedow = function() {
                    $scope.showdow = $scope.showdow ? false : true;
                }
                $scope.search = function() {
                	window.location=window.location.origin+window.location.pathname+"#!/search?q="+$scope.seatext;
                	$rootScope.seatext=$scope.seatext;
                }
            }
        ])
})(angular)
