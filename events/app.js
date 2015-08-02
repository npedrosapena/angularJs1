angular.module('app',[])

    .controller("controladorBasico",['$scope',function($scope){

        $scope.contador=0;
        $scope.add=function(v){
            $scope.contador+=v;
        };

        $scope.substract=function(v){
            $scope.contador-=1;
        }
    }]);