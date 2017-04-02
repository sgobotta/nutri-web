angular.module('starter')

.directive('footer', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/footer.html'
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