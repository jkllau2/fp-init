var app = angular.module('fpApp', ['ui.bootstrap']);

app.directive('test', function() {
	return {
		restrict: 'E',
		template: '<p>test</p>'
	};
});

app.controller('fpCtrl', function($scope) {
});