angular.module('App')

.directive('footer', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/footer.html'
		/*lang: ['stateParams', function($stateParams){
				console.log("lang")
				return $stateParams.language
			}]*/
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