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
    template: '<h4 class="fp_notice">We are working on something <strong>very interesting</strong>! We&#39;ll \keep you posted.</h4>'
  };
});

app.directive('subscription', function () {
  return {
    restrict: 'E',
    template: '<form ng-submit="processForm()" class="form-inline fp_subscription">\
                  <div class="input-group">\
                  <input ng-model="formData.email" name="email" type="email" class="form-control fp_subscription_email" placeholder="Your email here...">\
                  <span class="input-group-btn">\
                  <button ng-disabled="!(!!formData.email)" type="submit" class="btn btn-danger">\
                  Notify Me!</button></span></div></form>'
  };
}); 

app.directive('socialmedia', function () {
  return {
    restrict: 'E',
    template: '<ul class="nav-pills col-md-6 col-md-offset-5 fp_social_wrapper">\
                  <li role="presentation"><a href="#"><img class="fp_social" src="i/facebook.png"></a></li>\
                  <li role="presentation"><a href="#"><img class="fp_social" src="i/twitter.png"></a></li>\
                  <li role="presentation"><a href="#"><img class="fp_social" src="i/googleplus.png"></a></li>\
              </ul>'
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
    .success(function(data, status, headers, config) {
      
        if (status == '200') {
          // if successful, set field to empty
          $scope.formData = null;
        } else {
          
        }
    });
  };

});

