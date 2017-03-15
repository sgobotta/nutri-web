var app = angular.module('starter', ['ui.router']);

 
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
  .state('outside', {
    url: '/outside',
    abstract: true,
    templateUrl: '../templates/outside.html'
  })
  .state('outside.login', {
    url: '/login',
    templateUrl: '../templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('outside.register', {
    url: '/register',
    templateUrl: '../templates/register.html',
    controller: 'RegisterCtrl'
  })
  .state('inside', {
    url: '/inside',
    templateUrl: '../templates/inside.html',
    controller: 'InsideCtrl'
  });
 
  $urlRouterProvider.otherwise('/outside/login');
}])
 
app.run(function($rootScope, $state, AuthService, AUTH_EVENTS) {
  $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState) {
    if(!AuthService.isAuthenticated()) {
      if(next.name !== 'outside.login' && next.name !== 'outside.register') {
        console.log("going outside")
        event.preventDefault();
        $state.go('outside.login');
      }
    }
  });
});