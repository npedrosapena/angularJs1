angular.module('app',[])

    .controller("controladorBasico",['$scope',function($scope){

        $scope.contador=0; //inicializamos la variable contador de la web a 0

        $scope.add=function(v){ //asignamos esta función a la variable add que definimos en el html
            $scope.contador+=v; //sumamos al valor de la variable definida en el html, el número V que pasamos por la función
        };

        $scope.substract=function(v){ //asignamos esta función a la variable add que definimos en el html
            $scope.contador-=v; //restamos al valor de la variable definida en el html, el número V que pasamos por la función
        }
    }]);