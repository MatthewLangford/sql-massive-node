angular.module('myApp', ['ui.router'])
.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.when('', '/home');

        $stateProvider
            .state('home',{
                templateUrl: 'home.html',
                url: '/home',
                controller: 'homeCtrl'
            })
            .state('review', {
                templateUrl: 'review.html',
                url: '/review',
                controller: 'reviewCtrl'
            })
});