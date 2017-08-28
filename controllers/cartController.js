angular
  .module("galleryWebsite")
  .controller("cartController", function($scope, cartService) {
  

$scope.cart = cartService.getCart()

console.log($scope.cart);

$scope.totalPrice = cartService.totalPrice()



  })
