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

	.controller('AlunosController',  function($scope, $http){
            $scope.alunos = [];
            $http.get('http://radiosomtotal.jelastic.elastx.net/calp/alunos/')
                  .success(function(data){
                        $scope.alunos = data;
                  })
                  .error(function(data, status){
                        console.log('Erro: ',status,'  ---  ',data);
                  });

            var init = function(){
                  loadAlunos();
                  loadProjetos();
            }();      

            $scope.salvar = function(aluno){
                  console.log('CLicked', aluno);
                  $http.post('http://radiosomtotal.jelastic.elastx.net/calp/alunos/salvar/', aluno)
                        .success(function(data){
                              console.log(data);
                              limpar();
                              loadAlunos();
                        })
                        .error(function(data, status){
                              console.log('Erro: ',status,'  ---  ',data);
                        });
            };

            $scope.loadModalForEdit = function(aluno){
                  $scope.modal = {};
                  $scope.modal.id = aluno.id;
                  $scope.modal.nome = aluno.nome;
                  $scope.modal.projeto = aluno.projeto;
            };

            $scope.loadModalForDelete = function(aluno){
                  $scope.delmodal = {};
                  $scope.delmodal.id = aluno.id;
            };

            $scope.editar = function(dados){
                  var aluno = {};
                  aluno.id = dados.id;
                  aluno.nome = dados.nome;
                  aluno.projeto = dados.projeto;

                  $http.put('http://radiosomtotal.jelastic.elastx.net/calp/alunos/alterar/'+aluno.id, aluno)
                        .success(function(data){
                              console.log(data);
                              limpar();
                              loadAluno();
                        })
                        .error(function(data, status){                        
                              console.log('Erro: ',status,'  ---  ',data);
                        });

            };

            $scope.deletar = function(id){

                  $http.delete('http://radiosomtotal.jelastic.elastx.net/calp/alunos/apagar/'+id)
                        .success(function(data){
                              console.log(data);
                              limpar();
                              loadAlunos();
                        })
                        .error(function(data, status){                        
                              console.log('Erro: ',status,'  ---  ',data);
                        });
            };

            function loadAlunos(){
                  $scope.alunos = [];
                  $http.get('http://radiosomtotal.jelastic.elastx.net/calp/alunos/')
                  .success(function(data){
                        $scope.alunos = data;
                  })
                  .error(function(data, status){
                        console.log('Erro: ',status,'  ---  ',data);
                  });
            }

             function loadProjetos(){
                  $scope.professores = [];
                  $http.get('http://radiosomtotal.jelastic.elastx.net/calp/projetos/')
                  .success(function(data){
                        $scope.projetos = data;
                  })
                  .error(function(data, status){
                        console.log('Erro: ',status,'  ---  ',data);
                  });
            }

            function limpar(){
                  $scope.aluno = {};
                  $scope.modal = {};
            }
	})

	.controller('ProjetosController',  function($scope, $http){
            $scope.projetos = [];
                  $http.get('http://radiosomtotal.jelastic.elastx.net/calp/projetos/')
                  .success(function(data){
                        $scope.projetos = data;
                  })
                  .error(function(data, status){
                        console.log('Erro: ',status,'  ---  ',data);
                  });

		var init = function(){
			loadProjetos();
	      	loadProfessores();
	      	loadTiposDeProjeto();
		}();

            $scope.salvar = function(projeto){
            console.log('CLicked', projeto);
            $http.post('http://radiosomtotal.jelastic.elastx.net/calp/projetos/salvar/', projeto)
                  .success(function(data){
                        console.log(data);
                        limpar();
                        loadProjetos();
                  })
                  .error(function(data, status){
                        console.log('Erro: ',status,'  ---  ',data);
                  });
             };

             $scope.loadModalForEdit = function(projeto){
                  $scope.modal = {};
                  $scope.modal.id = projeto.id;
                  $scope.modal.nome = projeto.nome;
                  $scope.modal.resumo = projeto.resumo;
                  $scope.modal.professor = projeto.professor;

            };

            $scope.loadModalForDelete = function(projeto){
                  $scope.delmodal = {};
                  $scope.delmodal.id = projeto.id;
            };

            $scope.editar = function(dados){
                  var projeto = {};
                  projeto.id = dados.id;
                  projeto.nome = dados.nome;
                  projeto.resumo = dados.resumo;
                  projeto.professor = dados.professor;
                  
                  $http.put('http://radiosomtotal.jelastic.elastx.net/calp/projetos/alterar/'+projeto.id, projeto)
                        .success(function(data){
                              console.log(data);
                              limpar();
                              loadProjetos();
                        })
                        .error(function(data, status){                        
                              console.log('Erro: ',status,'  ---  ',data);
                        });

            };

            $scope.deletar = function(id){

                  $http.delete('http://radiosomtotal.jelastic.elastx.net/calp/projetos/apagar/'+id)
                        .success(function(data){
                              console.log(data);
                              limpar();
                              loadProjetos();
                        })
                        .error(function(data, status){                        
                              console.log('Erro: ',status,'  ---  ',data);
                        });
            };


		function loadProjetos(){
                  $scope.projetos = [];
			$http.get('http://radiosomtotal.jelastic.elastx.net/calp/projetos/')
	      	.success(function(data){
	      		$scope.projetos = data;
	      	})
	      	.error(function(data, status){
	      		console.log('Erro: ',status,'  ---  ',data);
	      	});
		}

            function limpar(){
                  $scope.projetos = {};
                  $scope.modal = {};
            }

	      function loadProfessores(){
	      	$scope.professores = [];
	      	$http.get('http://radiosomtotal.jelastic.elastx.net/calp/professores/')
	      	.success(function(data){
	      		$scope.professores = data;
                        console.log("professores carregados");
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