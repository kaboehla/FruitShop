/**
 * Created by kay on 05.10.2015.
 */
app.controller("fruitListController",
    function ($scope, $location) {
        $scope.query = {name: ""};
        $scope.sort = {predicate: "name", reverse: false};

        $scope.applyFilter = function () {
            $location.path("/fruits/" + ($scope.input.filter || ""));
        };

        $scope.addFruit = function(){
            var newId = $scope.fruits.length + 1;
            $scope.fruits.push({id : newId, name : $scope.inputFruit, family : ''})
            $scope.inputFruit = '';
        };

    });
