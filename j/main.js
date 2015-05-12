var app = angular.module('fpApp', ['ui.bootstrap']);

app.directive('logo', function() {
	return {
		restrict: 'E',
		template: '<img class="fp_logo" src="i/logo.png" alt="foodpose"/>'
	};
});

app.directive('slogan', function () {
  return {
    restrict: 'E',
    template: '<h1 class="text-uppercase fp_slogan">discover and share innovative receipes.</h1>'
  };
});

app.directive('notice', function () {
  return {
    restrict: 'E',
    template: '<h4 class="fp_notice">We are working on something <strong>very interesting</strong>! We&#39;ll keep you posted.</h4>'
  };
});

app.directive('subscription', function () {
  return {
    restrict: 'E',
    template: '<form class="form-inline fp_subscription"><div class="form-group"><input type="email" class="form-control fp_subscription_email" placeholder="Your email here..."></div><button type="submit" class="btn btn-danger">Notify Me!</button></form>'
  };
});

app.controller('fpCtrl', function($scope) {
});