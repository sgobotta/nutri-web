
angular.module('starter')
 
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


.controller('AppCtrl', function($scope, $state, AuthService, AUTH_EVENTS) {

  $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
    AuthService.logout()
    $state.go('outside.login')
    alert("Sorry. You have to login again.")
  });

})