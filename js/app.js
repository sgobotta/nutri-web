
var app = angular.module('App', ['ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

/*  var params = {
    resolvelang: ['$stateParams', function($stateParams){
      return $stateParams.language
    }],
  }*/


  $stateProvider
  .state('outside', {
    url: '/outside',
    abstract: true,
    templateUrl: '../templates/outside.html'
  })
  .state('outside.welcome', {
    url: '/:language/welcome',
    templateUrl: function(stateParams) { return '../templates/' + stateParams.language + '/welcome.html'},
    controller: 'WelcomeCtrl'
  })
  .state('outside.home', {
    url: '/:language/home',
    templateUrl: function(stateParams) { return '../templates/' + stateParams.language + '/home.html'},
    controller: 'HomeCtrl'
  })
  .state('outside.services', {
    url: '/:language/services',
    templateUrl: function(stateParams) { return '../templates/' + stateParams.language + '/services.html'},
    controller: 'ServicesCtrl'
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

  $urlRouterProvider.otherwise('/outside/es/welcome');

}])
 
app.run(function($rootScope, $state, AuthService, AUTH_EVENTS) {
  $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState) {
    if(!AuthService.isAuthenticated()) {
      var state = next.name
      if(!state.startsWith('outside.')) {
        event.preventDefault();
        $state.go('outside.welcome');
      }
    }
  });
});
