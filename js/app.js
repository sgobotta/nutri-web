
var app = angular.module('starter', ['ui.router']);

 
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
  .state('outside', {
    url: '/outside',
    abstract: true,
    templateUrl: '../templates/outside.html'
  })
  .state('outside.home', {
    url: '/home',
    templateUrl: '../templates/home.html',
    controller: 'HomeCtrl'
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
  .state('outside.recover', {
    url: '/recover',
    templateUrl: '../templates/recover.html',
    controller: 'RecoverCtrl'
  })
  .state('outside.reset', {
    url: '/reset/:token',
    templateUrl: '../templates/reset.html',
    controller: 'ResetCtrl'
  })
  .state('inside', {
    url: '/inside',
    templateUrl: '../templates/inside.html',
    controller: 'InsideCtrl'
  });
 
  $urlRouterProvider.otherwise('/outside/home');
}])
 
app.run(function($rootScope, $state, AuthService, AUTH_EVENTS) {
  $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState) {
    if(!AuthService.isAuthenticated()) {
      var state = next.name
      if(!state.startsWith('outside.')) {
        event.preventDefault();
        $state.go('outside.home');
      }
    }
  });
});
