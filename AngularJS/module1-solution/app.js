(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.menu = ""; // string
    $scope.result = "";

    $scope.checkLunch = function () {

        // array of strings split at each point where the separator occurs in the given string
        var stringToSplit = $scope.menu;
        var arrayOfStrings = stringToSplit.split(",");

        console.log(arrayOfStrings.length);

            if (arrayOfStrings.length == 1) { // if the textbox is empty
                $scope.result = "Please enter data first";
            } else if (arrayOfStrings.length <= 3) { // number of items less than or equal to 3
                $scope.result = "Enjoy!";
            } else { // number of items greater than 3
                $scope.result = "Too much!";
            }
    };
}

})();
