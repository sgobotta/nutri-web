angular.module('App')

.directive('language', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/language.html'
	}
})

.directive('footer', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/footer.html'
	  }
})

.directive('mnvHeaderEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/header.html'
	}
})

.directive('mnvHeaderEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/header.html'
	}
})

.directive('serviceAlimentaryPlanEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/alimentary_plan.html'
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