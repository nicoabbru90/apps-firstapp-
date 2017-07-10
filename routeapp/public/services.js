angular.module('routeApp.services', ['ngRoute'])
.factory("descargasFactory", function(){
    var descargasRealizadas = ["Manual de Javascript", "Manual de jQuery", "Manual de AngularJS"];
    var interfaz = {        
		nombre: "Manolo",
        getDescargas: function(){
            return descargasRealizadas;
			},
		nuevaDescarga: function(descarga){
            descargasRealizadas.push(descarga);
			}    
		, 
		quitarDescarga: function(index) {
			descargasRealizadas.splice(index, 1);
		}		
	}	
		return interfaz; 
	})