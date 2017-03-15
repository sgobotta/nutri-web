angular.module('starter')
 
.service('AuthService', function($q, $http, API_ENDPOINT) {
  var LOCAL_TOKEN_KEY = 'yourTokenKey';
  var isAuthenticated = false;
  var authToken;
 
  function loadUserCredentials() {
    var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    if(token) {
      useCredentials(token);
    }
  }
 
  function storeUserCredentials(token) {
    window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
    useCredentials(token);
  }
 
  function useCredentials(token) {
    isAuthenticated = true;
    authToken = token;
 
    // Set the token as header for your requests!
    console.log(authToken)
    $http.defaults.headers.common.Authorization = authToken;
  }
 
  function destroyUserCredentials() {
    authToken = undefined;
    isAuthenticated = false;
    $http.defaults.headers.common.Authorization = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }

/*  var register = function(user) {
    console.log(user)
    return $q(function(resolve, reject) {
      console.log("lala")
      $http({
        method: 'POST',
        url: API_ENDPOINT.url + '/signup',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: user
      }).then(function(result){
        console.log("after promise");
        if(result.data.success) {
          resolve(result.data.msg)
        }
        else {
          reject(result.data.msg)
        }
      })
    });
  };*/

  var register = function(user) {
    console.log(user)
    return $q(function(resolve, reject) {
      $http.post(API_ENDPOINT.url + '/signup', user).then(function(result) {
        console.log(result.data)
        if(result.data.success) {
          resolve(result.data.msg);
        } else if(!result.data.success){
          reject(result.data.msg);
        }
      });
    });
  };

 
  var login = function(user) {
    return $q(function(resolve, reject) {
      $http.post(API_ENDPOINT.url + '/authenticate', user).then(function(result) {
        if (result.data.success) {
          storeUserCredentials(result.data.token);
          resolve(result.data.msg);
        } else {
          reject(result.data.msg);
        }
      });
    });
  };
 
  var logout = function() {
    destroyUserCredentials();
  };
 
  loadUserCredentials();
 
  return {
    login: login,
    register: register,
    logout: logout,
    isAuthenticated: function() {return isAuthenticated;},
  };
})
 
.factory('AuthInterceptor', function($rootScope, $q, AUTH_EVENTS) {
  return {
    responseError: function(response) {
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated
      }[response.status], response);
      return $q.reject(response);
    }
  };
})
 
.config(function ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
});