//angular.module("fruitApp").controller("gemueseListController",
app.controller("gemueseListController",
    function ($scope, $location) {
        $scope.query = {name: ""};
        $scope.sort = {predicate: "name", reverse: false};

        $scope.applyFilter = function () {
            $location.path("/gemuese/" + ($scope.input.filter || ""));
        }
    });

