var app = angular.module('app', []);

app.controller('TicTacToc', function($scope) {


    // ng-hide
    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };


    // data
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
    $scope.countClicplayer=0;

    $scope.player= function (param) {
        console.log( 'symbole select '+param, $scope.symbol);
        $scope.game=param;
        if(!$scope.symbol){
            alert("select symbol");
        }

        $scope.playerActive = param;
        console.log('active', $scope.playerActive);


    }





    $scope.clickGme = function (x) {

        if ($scope.playerActive == null){
            alert("select player");

        }else{

            if (x.etat == null){

                $scope.countClicplayer++;
                console.log($scope.countClicplayer,$scope.bloc)
                x.contenu = $scope.symbol;
                x.etat="clique";
                $scope.symbol =($scope.symbol=='X') ? 'O':'X';
                $scope.game =($scope.game=='player1') ? 'player2':'player1';
                $scope.playerActive =($scope.playerActive=='player1') ? 'player2':'player1';
                    calculwinner($scope.bloc);
            }

        }

    }



    function calculwinner (x) {

        function winner(A,B,C) {
            if (    ((A=='X') && (B=='X') && (C=='X'))|| ((A=='O') && (B=='O') && (C=='O')) ){
                $scope.playerActive =($scope.playerActive=='player1') ? 'player2':'player1';
                console.log('winner is ..',$scope.playerActive )
                alert('winner is ..',$scope.playerActive);
            }


        }
        winner(x.top[0].contenu, x.middle[0].contenu, x.bottom[0].contenu)
        winner(x.top[1].contenu, x.middle[1].contenu, x.bottom[1].contenu)
        winner(x.top[2].contenu, x.middle[2].contenu, x.bottom[2].contenu)
        winner(x.top[0].contenu, x.middle[1].contenu, x.bottom[2].contenu)
        winner(x.bottom[0].contenu, x.bottom[1].contenu, x.bottom[2].contenu)
        winner(x.middle[0].contenu, x.middle[1].contenu, x.middle[2].contenu)
        winner(x.top[0].contenu, x.top[1].contenu, x.top[2].contenu)
        winner(x.top[2].contenu, x.middle[1].contenu, x.bottom[0].contenu)


    }


});
