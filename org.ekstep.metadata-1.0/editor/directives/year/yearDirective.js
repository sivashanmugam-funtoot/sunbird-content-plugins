/**
 * @description
 * @author Manjunath Davanam <manjunathd@ilimi.in>
 */

formApp.directive('year', function() {
    var yearDropdownController = ['$scope', '$controller', function($scope, $controller) {
        $scope.years = [];
        $scope.contentMeta = $scope.$parent.$parent.$parent.contentMeta;
        $scope.fieldConfig = $scope.config;
        $scope.initYearDropDown = function() {
            $scope.currentYear = new Date().getFullYear();
            const FROM_YEAR_INDEX = 15;
            const TO_YEAR_INDEX = 5;
            $scope.fromYear = $scope.currentYear - FROM_YEAR_INDEX;
            $scope.toYear = $scope.currentYear + TO_YEAR_INDEX;
            for (var i = $scope.fromYear; i < $scope.toYear; i++) {
                $scope.years.push(i);
            }
        }
        $scope.initYearDropDown();
    }]
    return {
        restrict: "EA",
        templateUrl: ecEditor.resolvePluginResource("org.ekstep.metadata", "1.0", "editor/directives/year/template.html"),
        transclude: true,
        scope: {
            config: "="
        },
        controller: yearDropdownController

    };
});

//# sourceURL=yearDirective.js;