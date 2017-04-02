angular.module('App')

.directive('header', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/header.html'
	}
})

.directive('footer', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/footer.html'
	  }
})

.directive('loginTemplate', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/login.html'
	}
})

.directive('signupTemplate', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/register.html'
	}
})