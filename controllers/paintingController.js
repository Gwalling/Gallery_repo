angular
  .module("galleryWebsite")
  .controller("paintingController", function($scope, $state, $stateParams, paintingService, cartService) {
    
  paintingService.getPaintings(function(response) {
    $scope.paintings = response;
    
    if ($stateParams.id === undefined || $stateParams.id === null || $stateParams.id === "") {
      $scope.formHeader = "Add a Painting"
      $scope.submitButton = true;
      $scope.saveButton = false;

      paintingService.getPaintingById($stateParams.id, function(painting){
        $scope.painting = painting
      })

    }
    else {
      $scope.formHeader = "Update Painting"
      $scope.submitButton = false;
      $scope.saveButton = true;

      paintingService.getPaintingById($stateParams.id, function(painting){
        $scope.painting = painting
      })

    }
  })

    

    $scope.addPainting = function() {
      console.log($scope.painting);
      paintingService.addPainting($scope.painting.image, $scope.painting.collection, $scope.painting.name, $scope.painting.type, $scope.painting.dimensions, $scope.painting.style, $scope.painting.medium, $scope.painting.price)

      $state.go("paintings")
    }

    // Update Painting
    $scope.updatePainting = function() {
      paintingService.updatePainting($scope.painting)

      $state.go("showPainting", { "id": $stateParams.id});
    }

    // Delete Painting
    $scope.deletePainting = function() {
      paintingService.deletePainting($stateParams.id)
      $state.go("paintings")
    }


    $scope.addToCart = function(item) {
      cartService.addToCart(item)


    }
})
