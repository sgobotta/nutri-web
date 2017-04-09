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

/* SERVICES */
.directive('serviceAlimentaryPlanEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/alimentary_plan.html'
	}
})
.directive('serviceAlimentaryPlanEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/alimentary_plan.html'
	}
})

.directive('serviceAssistanceEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/assistance.html'
	}
})
.directive('serviceAssistanceEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/assistance.html'
	}
})

.directive('serviceExcersicePrescriptionEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/excersice_prescription.html'
	}
})
.directive('serviceExcersicePrescriptionEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/excersice_prescription.html'
	}
})

.directive('serviceMobileAppEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/mobile_app.html'
	}
})
.directive('serviceMobileAppEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/mobile_app.html'
	}
})

.directive('serviceCampusEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/campus.html'
	}
})
.directive('serviceCampusEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/campus.html'
	}
})

.directive('serviceGroupInteractionEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/group_interaction.html'
	}
})
.directive('serviceGroupInteractionEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/group_interaction.html'
	}
})

.directive('serviceArtTherapyEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/art_therapy.html'
	}
})
.directive('serviceArtTherapyEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/art_therapy.html'
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