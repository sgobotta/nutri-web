angular.module('starter')
 
.controller('LoginCtrl', function($scope, AuthService, $state) {
  $scope.user = {
    name: '',
    password: ''
  };
 
  $scope.login = function() {
    AuthService.login($scope.user).then(function(msg) {
      $state.go('inside');
    }, function(errMsg) {
      alert(errMsg)
    });
  };
})
 
.controller('RegisterCtrl', function($scope, AuthService, $state) {
  $scope.user = {
    name: '',
    password: ''
  };
 
  $scope.signup = function() {
    console.log("in sign up")
    AuthService.register($scope.user).then(function(msg) {
      $state.go('outside.login');
      alert("Register Success! " + msg)
    }, function(errMsg) {
      alert("Register failed! " + errMsg)
    });
  };
})
 
.controller('InsideCtrl', function($scope, AuthService, API_ENDPOINT, $http, $state) {

  $scope.destroySession = function() {
    AuthService.logout();
  };

  $scope.getInfo = function() {
    $http.get(API_ENDPOINT.url + '/memberinfo').then(function(result) {
      console.log(result.data.msg)
      $scope.memberinfo = result.data.msg;
    });
  };

  $scope.logout = function() {
    AuthService.logout();
    $state.go('outside.login');
  };
})

.controller('AppCtrl', function($scope, $state, AuthService, AUTH_EVENTS) {
  $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
    AuthService.logout();
    $state.go('outside.login');
    alert("Sorry. You have to login again.")
  });
});