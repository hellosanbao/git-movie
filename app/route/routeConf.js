;
(function(angular) {
    angular.module('routeConfModel', ['ui.router'])
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                //没有任何匹配的时候跳到home路由
                $urlRouterProvider.otherwise("/warp");

                    //main路由
                  $stateProvider.state('warp', {
                        url: '/warp',
                        templateUrl: 'tpl/warp/warp.html',
                        controller:'warpController'
                    })
                  .state('subject', {
                        url: '/subject/:id',
                        templateUrl: 'tpl/detail/detail.html',
                        controller:'detailController'
                    })
                  .state('dlist', {
                        url: '/:type',
                        templateUrl: 'tpl/dlist/dlist.html',
                        controller:'dlistController'
                    })
                  .state('search', {
                        url: '/search',
                        templateUrl: 'tpl/dlist/dlist.html',
                        controller:'mainController'
                    })
            }
        ])
})(angular)
