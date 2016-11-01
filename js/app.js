angular.module('miniRouting', ["ui.router"])

.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'js/home/homeTmp1.html',
      controller: 'homeCtrl'
    })
    .state('settings',{
      url: '/settings',
      templateUrl: 'js/settings/settingsTmp1.html',
      controller: 'settingsCtrl'
    })
    .state('products',{
      url: '/products:id',
      templateUrl: 'js/products/productsTmp1.html',
      controller: 'productsCtrl'
    });

    $urlRouterProvider//if not one of these routers then go here
       .otherwise('/');//is is default url now

});
