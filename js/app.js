
var app = angular.module('App', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ngTouch']);

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
  .state('outside.plan', {
    url: '/:language/plan',
    abstract: true,
    templateUrl: function(stateParams) { return '../templates/' + stateParams.language + '/plan.html'},
    controller: 'PlanCtrl'
  })
  .state('outside.plan.healthyNutrition', {
    url: '/:language/plan/healthy-nutrition',
    templateUrl: function(stateParams) { return '../templates/' + stateParams.language + '/plan/healthy-nutrition.html'},
  })
  .state('outside.plan.weightLoss', {
    url: '/:language/plan/weight-loss',
    templateUrl: function(stateParams) { return '../templates/' + stateParams.language + '/plan/weight-loss.html'},
  })
  .state('outside.plan.muscleWorkout', {
    url: '/:language/plan/muscle-workout',
    templateUrl: function(stateParams) { return '../templates/' + stateParams.language + '/plan/muscle-workout.html'},
  })
  .state('outside.plan.fitness', {
    url: '/:language/plan/fitness',
    templateUrl: function(stateParams) { return '../templates/' + stateParams.language + '/plan/fitness.html'},
  })
  .state('outside.plan.sportNutrition', {
    url: '/:language/plan/sport-nutrition',
    templateUrl: function(stateParams) { return '../templates/' + stateParams.language + '/plan/sport-nutrition.html'},
  })
  .state('outside.shop', {
    url: '/:language/shop',
    templateUrl: function(stateParams) { return '../templates/' + stateParams.language + '/shop.html'},
    controller: 'ShopCtrl'
  })
  .state('outside.contact', {
    url: '/:language/contact',
    templateUrl: function(stateParams) { return '../templates/' + stateParams.language + '/contact.html'},
    controller: 'ContactCtrl'
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
