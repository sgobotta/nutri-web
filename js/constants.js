angular.module('App')
 
.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated'
})
 
.constant('API_ENDPOINT', {
  url: 'http://127.0.0.1:8082/api'
  //  For a simulator use: url: 'http://127.0.0.1:8080/api'
})

.constant('HOME_SLIDES', {
	array: [ 	{ id:0, text: 'Reduzca grasa saludablemente', 
							url: 'http://127.0.0.1:8082/static/img/home/slide/01.jpg'
						},
						{ id:1, text: 'Aprende combinaciones y porciones',
							url: 'http://127.0.0.1:8082/static/img/home/slide/02.jpg'
						},
						{ id:2, text: 'Arme su propio menú personalizado',
							url: 'http://127.0.0.1:8082/static/img/home/slide/03.jpg'
						},
						{ id:3, text: 'Manejo de situaciones en eventos, cumpleaños, navidades, etc',
							url: 'http://127.0.0.1:8082/static/img/home/slide/04.jpg'
						}
					]
});