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

/************/
/* SERVICES 
 */

.directive('servicePeriodicMeasurementsEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/periodic_measurements.html'
	}
})
.directive('servicePeriodicMeasurementsEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/periodic_measurements.html'
	}
})

.directive('serviceMotivationEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/motivation.html'
	}
})
.directive('serviceMotivationEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/motivation.html'
	}
})

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

.directive('serviceMuscleWorkoutAlimentaryPlanEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/muscle_workout_alimentary_plan.html'
	}
})
.directive('serviceMuscleWorkoutAlimentaryPlanEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/muscle_workout_alimentary_plan.html'
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

.directive('serviceNeurosychicFoodEducationEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/neurosychic_food_education.html'
	}
})
.directive('serviceNeurosychicFoodEducationEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/neurosychic_food_education.html'
	}
})

.directive('serviceAnthropometryEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/anthropometry.html'
	}
})
.directive('serviceAnthropometryEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/anthropometry.html'
	}
})

.directive('serviceIndirectCalorimetryEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/indirect_calorimetry.html'
	}
})
.directive('serviceIndirectCalorimetryEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/indirect_calorimetry.html'
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

.directive('serviceExcersiceCounselingEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/excersice_counseling.html'
	}
})
.directive('serviceExcersiceCounselingEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/excersice_counseling.html'
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

.directive('serviceNutrigeneticEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/nutrigenetic.html'
	}
})
.directive('serviceNutrigeneticEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/nutrigenetic.html'
	}
})

.directive('serviceGeneticsAndExcersiceEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/genetics_and_excersice.html'
	}
})
.directive('serviceGeneticsAndExcersiceEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/genetics_and_excersice.html'
	}
})

.directive('serviceSportsAndFitnessEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/sports_and_fitness.html'
	}
})
.directive('serviceSportsAndFitnessEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/sports_and_fitness.html'
	}
})

.directive('serviceSupplementationRecommendationEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/services/supplementation_recommendation.html'
	}
})
.directive('serviceSupplementationRecommendationEn', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/en/services/supplementation_recommendation.html'
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

.directive('upArrow', function($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= scope.initialHeight) {
                 scope.isArrowVisible = true;
             } else {
                 scope.isArrowVisible = false;
             }
            scope.$apply();
        });
    };
})

.directive('customHeader', function($window){
	var lang = ($window.navigator.language).slice(0,2)
	if(lang != 'es' && lang != 'en') {
		lang = 'en'
	}
	return {
		restrict: 'A',
		templateUrl: function() { return '../templates/' + lang + '/header.html'}
	}
})

.directive('homeCarouselEs', function(){
	return {
		restrict: 'A',
		templateUrl: '../templates/es/home/carousel.html'
	}
});

