angular.module('routeApp.ngRouter', ['ngRoute'])
.config(function($routeProvider){
$routeProvider
.when('/home', {  
	templateUrl: '/views/home.html',	
	controller: 'HomeController',
	controllerAs: "vm"	} 
	)
.when('/opciones', {  
	templateUrl: '/views/opciones.html',  
	controller: 'OpcionesController',
	controllerAs: "vm" } 
	)
.when('/descargas', {  
	templateUrl: '/views/descargas.html',  
	controller: 'DescargasController',
	controllerAs: "vm" } 
	)
.otherwise({redirectTo: '/home'});
})