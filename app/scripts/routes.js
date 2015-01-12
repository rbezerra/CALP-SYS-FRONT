'use strict';

angular.module('calpApp.routes', ['ngRoute'])
	.constant('ROUTES', {
		'/': {
	      templateUrl: 'views/horarios.html',
	      controller : 'MainController'
	    },
	    '/usuarios' : {
	      templateUrl:  'views/usuarios.html',
	      controller:   'UsuariosController',
	      authRequired: true
	    },
	    '/sobre' : {
	      templateUrl:  'views/sobre.html',
	      controller:   'SobreController'
	    },
	    '/alunos' : {
	      templateUrl:  'views/alunos.html',
	      controller:   'AlunosController',
	      authRequired: true
	    },
	    '/projetos' : {
	      templateUrl:  'views/projetos.html',
	      controller:   'ProjetosController',
	      authRequired: true 
	    },
	    '/login' : {
	      templateUrl:  'views/login.html',
	      controller:   'LoginController'
	    }
	})
	.config(['$routeProvider', 'ROUTES', function($routeProvider, ROUTES) {
		angular.forEach(ROUTES, function(route, path){
			$routeProvider.when(path, route);
		});

		$routeProvider.otherwise({redirectTo: '/'});
	}])

	.run(function(){
		console.log('Rotas definidas');
	});