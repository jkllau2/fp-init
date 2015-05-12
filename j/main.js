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
    template: '<form ng-submit="processForm()" class="form-inline fp_subscription"><div class="form-group"><input ng-model="formData.email" name="email" type="email" class="form-control fp_subscription_email" placeholder="Your email here..."></div><button type="submit" class="btn btn-danger">Notify Me!</button></form>'
  };
});

app.controller('fpCtrl', function($scope, $http) {
  $scope.formData = '';

  $scope.processForm = function() {
    $http({
      method  : 'POST',
      url     : '/p/db.php',
      data    : $.param($scope.formData),  // pass in data as strings
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
      })
    .success(function(data) {
      console.log(data);
        if (!data.success) {
          // if not successful, bind errors to error variables
          // $scope.errorEmail = data.errors.email;
        } else {
          // if successful, bind success message to message
          //$scope.message = data.message;
        }
    });
  };

});

