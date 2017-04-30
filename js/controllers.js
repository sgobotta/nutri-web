
angular.module('App')

.controller('WelcomeCtrl', function($scope, $state){

  $scope.enter = function(language){
    $state.go('outside.home', {
      language: language
    })
  }

})

.controller('HomeCtrl', function(){


})

.controller('HomeCarousel', function($scope, HOME_SLIDES){

  $scope.myInterval = 2000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.slides = HOME_SLIDES.array;

})

.controller('ServicesCtrl', function($scope, $location, $anchorScroll, $window){

  $scope.initialHeight = $window.innerHeight

  $scope.isArrowVisible = false;

  $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }

  $scope.scrollTo('top')

})

.controller('AppCtrl', function($rootScope, $scope, $state, $window, AuthService, AUTH_EVENTS) {

  $scope.healthyNutritionPlan = function() {
    $state.go('outside.plan.healthyNutrition', {
      language: $state.params.language
    })
  }

  $scope.weightLossPlan = function() {
    $state.go('outside.plan.weightLoss', {
      language: $state.params.language
    })
  }

  $scope.muscleWorkoutPlan = function() {
    $state.go('outside.plan.muscleWorkout', {
      language: $state.params.language
    })
  }

  $scope.fitnessPlan = function() {
    $state.go('outside.plan.fitness', {
      language: $state.params.language
    })
  }

  $scope.sportsNutrition = function() {
    $state.go('outside.plan.sportNutrition', {
      language: $state.params.language
    })
  }

  $scope.home = function(){
    $state.go('outside.home', {
      language: $state.params.language
    })
  }

  $scope.services = function(){
    $state.go('outside.services', {
      language: $state.params.language
    })
  }

  $scope.chooseLanguage = function(language){
    $state.params.language = language
    $state.transitionTo($state.current, $state.params, {
      reload: true, inherit: true, notify: true
    });
  }

  $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
    AuthService.logout()
    $state.go('outside.login')
    alert("Sorry. You have to login again.")
  });

})

.controller('NavController', function($scope){

  $scope.isDropdownExpanded = false;

  $scope.showMenu = function(){
    $scope.isDropdownExpanded = true
  }
  $scope.hideMenu = function(){
    $scope.isDropdownExpanded = false
  }

})




.controller('LoginCtrl', function($scope, AuthService, $state, $stateParams) {

  $scope.user = {
    email: '',
    password: ''
  }

  $scope.login = function() {
    AuthService.login($scope.user).then(function(msg) {
      $state.go('inside');
    }, function(errMsg) {
      alert(errMsg)
    });
  }

})


.controller('RegisterCtrl', function($scope, AuthService, $state) {

  $scope.user = {
    email: '',
    name: '',
    password: ''
  }

  $scope.signup = function() {
    console.log("in sign up")
    AuthService.register($scope.user).then(function(msg) {
      alert("Register Success! " + msg)
      $state.go('outside.login');
    }, function(errMsg) {
      alert("Register failed! " + errMsg)
    });
  }

})


.controller('RecoverCtrl', function($scope, AuthService, $state) {

  $scope.user = {
    mail: ''
  }

  $scope.recover = function() {
    AuthService.recover($scope.user).then(function(msg) {
      alert(msg)
      $state.go('outside.login');
    }, function(errMsg) {
      alert(errMsg)
      $state.go('outside.login');
    });
  }

})


.controller('ResetCtrl', function($scope, AuthService, $state, $stateParams) {

  AuthService.resetPasswordGet($stateParams.token).then(function(msg){
    alert(msg)
  }, function(errMsg){
    alert(errMsg)
    $state.go('outside.recover')
    return
  })

  $scope.user = {
    token: $stateParams.token,
    password: ''
  }

  $scope.resetPassword = function() {
    AuthService.resetPasswordPost($scope.user).then(function(msg) {
      alert(msg)
      $state.go('outside.login');
    }, function(errMsg){
      alert(errMsg)
      $state.go('outside.recover');
    })
  }

})


.controller('InsideCtrl', function($scope, AuthService, API_ENDPOINT, $http, $state) {

  $scope.destroySession = function() {
    AuthService.logout()
  };

  $scope.getInfo = function() {
    $http.get(API_ENDPOINT.url + '/memberinfo').then(function(result) {
      console.log(result.data.msg)
      $scope.memberinfo = result.data.msg
    });
  }

  $scope.logout = function() {
    AuthService.logout()
    $state.go('outside.login')
  }

})
