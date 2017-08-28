angular
  .module("galleryWebsite")
  .controller("userController", function ($scope, $state, $stateParams, userService) {

    userService.getUsers(function (response) {
      $scope.users = response
    })

    if ($stateParams.id === undefined || $stateParams.id === null || $stateParams.id === "") {
      $scope.formHeader = "Create An Account!"
      $scope.submitButton = true;
      $scope.updateButton = false;
      userService.getUserById($stateParams.id, function (user) {
        $scope.user = user
      })
    }
    else {
      $scope.formHeader = "Update Account"
      $scope.submitButton = false;
      $scope.updateButton = true;
      userService.getUserById($stateParams.id, function (user) {
        $scope.user = user
      })
    }

    console.log($scope.user);

    $scope.addUser = function () {
      console.log($scope.user);
      userService.addUser($scope.user)
      $state.go("users")
    }

    // Update User fills the fields with the existing data and changes the button from Submit to Save
    $scope.updateUser = function () {
      userService.updateUser($stateParams.id, $scope.user)

      $state.go("showUser", { "id": $stateParams.id });
    }


    // Delete User removes the user from the array entirely
    $scope.deleteUser = function () {
      userService.deleteUser($stateParams.id)
      $state.go("users")
    }

  })