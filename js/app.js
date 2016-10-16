var app = angular.module('app', []);

app.controller('TicTacToc', function($scope) {
    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };

    $scope.bloc ={
        top:[
            {index:11, contenu:"", etat:null },
            {index:12,contenu:"", etat:null },
            {index:13,contenu:"", etat:null }
        ],
        middle:[
            {index:21,contenu:"", etat:null },
            {index:22,contenu:"", etat:null },
            {index:23,contenu:"", etat:null }
        ],
        bottom:[
            {index:31,contenu:"", etat:null },
            {index:32,contenu:"", etat:null },
            {index:33,contenu:"", etat:null }
        ],

    }

    $scope.playerActive = null;
    $scope.symbol = null;

    $scope.formData = {};

    $scope.player= function (param) {
        console.log( 'symbole select '+param, $scope.formData.symbol);
        $scope.game=param;
        if(!$scope.formData.symbol){
            alert("select symbol");
        }

        $scope.playerActive = param;
        console.log('active', $scope.playerActive);


    }


    $scope.clickGme = function (x,y,d) {

        if ($scope.playerActive == null){
            alert("select player");
        }else{
            if (x.etat == null){
                console.log(y,d)
                x.contenu = $scope.formData.symbol;
                x.etat="clique";
                $scope.formData.symbol =($scope.formData.symbol=='X') ? 'O':'X';

            }

        }

    }


});
