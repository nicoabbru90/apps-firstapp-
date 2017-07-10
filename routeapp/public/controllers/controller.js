var app =angular.module('routeApp.controller', []);

app.controller('mainController', function ($scope, $http) {
	$scope.names = [ ];

	$http.get('/api/api_home/api_home_controller.php')
        	.then(function(data) {
            		$scope.names = eval(data);
            		console.log($scope.names)
        		});
        	

	$scope.addNom = function() {
	
		$http.get('/api/api_home/api_home_controller.php', { op: 'append', nom: $scope.nom, telefon: $scope.telefon } )
	        	.then(function(data) {
        	    		$scope.names = eval(data);
        	    		console.log($scope.names)
        			});
        	

		$scope.nom="";
		$scope.telefon="";
		}

	$scope.delNom = function( nom ) {
		if ( confirm("Seguro?") ) {
			$http.get('/api/api_home/api_home_controller.php', { op: 'delete', nom: nom } )
				.then(function(data) {
			    		$scope.names = eval(data);
			    		console.log($scope.names);
					});
			
			}
		}

})
/**
.controller('MainController', function(){
	
})

.controller('HomeController', function(descargasFactory){
	var vm = this;        
	vm.nombre = descargasFactory.nombre;
    vm.descargas = descargasFactory.getDescargas();
	
	vm.guardarNombre= function(){
            descargasFactory.nombre = vm.nombre;
	}        
	
	   
		 
		
})

.controller('OpcionesController', function(descargasFactory){
	var vm = this;        
	vm.nombre = descargasFactory.nombre;
    vm.descargas = descargasFactory.getDescargas();
	vm.agregarDescarga= function(){
        descargasFactory.nuevaDescarga(vm.nombreNuevaDescarga);
        vm.mensaje = "Descarga agregada";
	}
	vm.quitarDescarga = function($index){
		descargasFactory.quitarDescarga($index);
        vm.mensaje = "Descarga eliminada";
	}

})
.controller('DescargasController',function(descargasFactory){
	var vm = this;        
	vm.nombre = descargasFactory.nombre;
    vm.descargas = descargasFactory.getDescargas();
	vm.borrarMensaje= function(){
		vm.mensaje = "";
	} 
})
.controller("navCtrl", function($location){
	var map = this;        
	map.estoy = function(ruta){
	return $location.path() == ruta;
	}    
})

;**/