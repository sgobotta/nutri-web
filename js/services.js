
angular.module('App')
 
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
    // Set the token as header for your requests!
    $http.defaults.headers.common.Authorization = token;
  }
 
  function destroyUserCredentials() {
    authToken = undefined;
    isAuthenticated = false;
    $http.defaults.headers.common.Authorization = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }

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
  }

  var login = function(user) {
    return $q(function(resolve, reject) {
      $http.post(API_ENDPOINT.url + '/authenticate', user).then(function(result) {
        if(result.data.success) {
          storeUserCredentials(result.data.token);
          resolve(result.data.msg);
        } else {
          reject(result.data.msg);
        }
      });
    });
  }

  var resetPasswordGet = function(token) {
    return $q(function(resolve, reject) {
      $http.get(API_ENDPOINT.url + '/reset/' + token).then(function(result){
        if(result.data.success){
          resolve(result.data.msg)
        } else {
          reject(result.data.msg)
        }
      })
    })
  }

  var resetPasswordPost = function(user) {
    return $q(function(resolve, reject) {
      $http.post(API_ENDPOINT.url + '/reset', { user: user }).then(function(result) {
        if(result.data.success) {
          resolve(result.data.msg)
        } else {
          reject(result.data.msg)
        }
      })
    })
  }


  var recover = function(email) {
    return $q(function(resolve, reject){
      $http.post(API_ENDPOINT.url + '/recover', email).then(function(result){
        if(result.data.success){
          resolve(result.data.msg);
        } else {
          reject(result.data.msg)
        }
      });
    });
  }
 
  var logout = function() {
    destroyUserCredentials();
  };
 
  loadUserCredentials();
 
  return {
    login: login,
    register: register,
    logout: logout,
    recover: recover,
    resetPasswordGet: resetPasswordGet,
    resetPasswordPost: resetPasswordPost,
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
  }
})
 
.config(function ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
})