var app = angular.module('app', []);

app.controller('TicTacToc', function($scope) {

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




});
