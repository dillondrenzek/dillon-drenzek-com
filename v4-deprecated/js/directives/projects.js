// v4.0.2

angular.module("DrenzekDillon")
.directive("projectMedium", function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/project-medium.html',
		scope: {
			project: '='
		}
	}
});