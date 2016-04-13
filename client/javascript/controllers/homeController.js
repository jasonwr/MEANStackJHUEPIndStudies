angular.module('meanstacktutorials').controller('HomeController', [
  '$scope',
  '$location',
  'AuthenticationService',
  'UserService',
  function ($scope, $location, AuthenticationService, UserService) {
    $scope.username = AuthenticationService.getUsername() || "";
    $scope.loggedIn = AuthenticationService.isLoggedIn();

    function getCurrentlyLoggedInUsername() {
      return $scope.username;
    };

    $scope.userdata = {};
    try {
      console.log("homeController load. $scope.username => " + $scope.username);
      var dpromise = UserService.getUser($scope.username);
      if (dpromise) {
        dpromise.getUser($scope.username)
                .then(function (userdata) {
                  // now that we have the JSON of users go ahead and grab just the user we want
                  $scope.userdata = angular.copy(userdata);
                }, function (error) {
                  throw "Error fetching userdata from UserService promise";
                });
      } else {
        throw "UserServer getUser returned null instead of promise. Param (username) must be nonexistent!";
      }
    } catch (err) {
      console.warn(err);
    }


    $scope.logout = function () {
      AuthenticationService.logout()
              .then(function () {
                $location.path('/');
                $scope.loggedIn = false;
                console.log('inner $scope.loggedIn: ' + $scope.loggedIn);
              });
    };

    return ({
      getCurrentlyLoggedInUsername: function () {
        return getCurrentlyLoggedInUsername();
      }
    });
  }
]);