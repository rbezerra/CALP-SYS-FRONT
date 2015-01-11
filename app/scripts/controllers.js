'use strict';

angular.module('calpApp.controllers', [])
	.controller('MainController', ['$scope', function($scope){
		$scope.dias = [];

	}])

	.controller('LoginController', [, function(){
		
	}])

	.controller('UsuariosController',  function($scope, $http){
	  $scope.professores = [];
      $http.get('http://radiosomtotal.jelastic.elastx.net/calp/professores/')
      	.success(function(data){
      		$scope.professores = data;
      	})
      	.error(function(data, status){
      		console.log('Erro: ',status,'  ---  ',data);
      	});

      $scope.salvar = function(professor){
      	console.log('CLicked', professor);
      	$http.post('http://radiosomtotal.jelastic.elastx.net/calp/professores/salvar/', professor)
      		.success(function(data){
      			console.log(data);
      			limpar();
      			loadProfessores();
      		})
      		.error(function(data, status){
      			console.log('Erro: ',status,'  ---  ',data);
      		});
      };

      $scope.loadModalForEdit = function(professor){
      	$scope.modal = {};
      	$scope.modal.id = professor.id;
      	$scope.modal.nome = professor.nome;
      	$scope.modal.email = professor.email;
      	$scope.modal.admin = professor.admin;

      };

      $scope.loadModalForDelete = function(professor){
      	$scope.delmodal = {};
      	$scope.delmodal.id = professor.id;
      };

      $scope.editar = function(dados){
      	var professor = {};
      	professor.id = dados.id;
      	professor.nome = dados.nome;
      	professor.email = dados.email;
      	professor.admin = dados.admin;
      	if(dados.senha !== ''){
      		professor.senha = dados.senha;
      	}

      	$http.put('http://radiosomtotal.jelastic.elastx.net/calp/professores/alterar/'+professor.id, professor)
			.success(function(data){
      			console.log(data);
      			limpar();
      			loadProfessores();
      		})
      		.error(function(data, status){      			
      			console.log('Erro: ',status,'  ---  ',data);
      		});

      };

      $scope.deletar = function(id){

      	$http.delete('http://radiosomtotal.jelastic.elastx.net/calp/professores/apagar/'+id)
			.success(function(data){
      			console.log(data);
      			limpar();
      			loadProfessores();
      		})
      		.error(function(data, status){      			
      			console.log('Erro: ',status,'  ---  ',data);
      		});
      };

      function loadProfessores(){
      	$scope.professores = [];
      	$http.get('http://radiosomtotal.jelastic.elastx.net/calp/professores/')
      	.success(function(data){
      		$scope.professores = data;
      	})
      	.error(function(data, status){
      		console.log('Erro: ',status,'  ---  ',data);
      	});
      }

      function limpar(){
      	$scope.professor = {};
      	$scope.modal = {};
      }
  	})

	.controller('AlunosController',  function($scope){
	    $scope.message = 'FALTA IMPLEMENTAR';
	})

	.controller('ProjetosController',  function($scope, $http){

		var init = function(){
			loadProjetos();
	      	loadProfessores();
	      	loadTiposDeProjeto();
		}();

		function loadProjetos(){
			$http.get('http://radiosomtotal.jelastic.elastx.net/calp/projetos/')
	      	.success(function(data){
	      		$scope.projetos = data;
	      	})
	      	.error(function(data, status){
	      		console.log('Erro: ',status,'  ---  ',data);
	      	});
		}

	    function loadProfessores(){
	      	$scope.professores = [];
	      	$http.get('http://radiosomtotal.jelastic.elastx.net/calp/professores/')
	      	.success(function(data){
	      		$scope.professores = data;
	      	})
	      	.error(function(data, status){
	      		console.log('Erro: ',status,'  ---  ',data);
	      	});
      	}

      	function loadTiposDeProjeto(){
      		$scope.tiposDeProjeto = [];
      		$http.get('http://radiosomtotal.jelastic.elastx.net/calp/categorias_projeto/')
	      	.success(function(data){
	      		$scope.tiposDeProjeto = data;
	      	})
	      	.error(function(data, status){
	      		console.log('Erro: ',status,'  ---  ',data);
	      	});
      	}
	})

	.controller('SobreController',  function($scope){
	    $scope.message = 'FALTA IMPLEMENTAR';
	})

	.run(function(){
		console.log('Controllers carregados');
	});