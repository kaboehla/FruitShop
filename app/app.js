var app = angular.module('fruitApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "app/start.html", name:"Start" })
        .when("/test", { templateUrl : "app/test.html", name:"Test" })
        .when("/fruits/.query?",
            {
                templateUrl : "./app/fruitList.html",
                controller : "fruitListController",
                name : "fruits"
            })
        .when("/gemuese/.query?",
        {
            templateUrl : "./app/gemueseList.html",
            controller  : "gemueseListController",
            name : "gemuese"
        })
        .otherwise({ redirectTo: "/" });
});

app.run(function ($rootScope, $location, $route) {
    $rootScope.$location = $location;
    $rootScope.$route = $route;
    $rootScope.keys = Object.keys;
});



// this is the root controller for the whole application. It defines the shared data in the parent scope
app.controller("FruitController", function FruitController($scope) {

    $scope.fruits = [
        {id: 1, name: 'Boskop', family : 'Apfel'},
        {id: 2, name: 'Elmar', family : 'Apfel'},
        {id: 3, name: 'Sauerkirsche', family : 'Kirsche'},
        {id: 4, name: 'Amarena-Kirsche', family : 'kirsche'},
        {id: 5, name: 'Achener Hausapfel', family : 'Apfel'},
        {id: 6, name: 'Alantapfel', family : 'Apfel'},
        {id: 7, name: 'Pfaffenapfel', family : 'Apfel'}
    ];

    $scope.gemuese = [
        {id: 1, name : 'Rotkohl'},
        {id: 2, name : 'Wirsingkohl'}
    ];

    //$scope.inputFruit = '';


});