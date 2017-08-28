angular
  .module("galleryWebsite")
  .service("cartService", function ($http) {

    var _cart = [];


    this.getCart = function() {

      return _cart;
    }

    this.addToCart = function (item) {
      console.log(item);
      _cart.push(item);
      console.log(_cart);
    }


    this.removeFromCart = function (item) {
      console.log(item);
      for (var i = 0; i < _cart.length; i++) {
        if (_cart[i] == item) {
          _cart.splice(i, 1)
          console.log(_cart);
        }
      }
    }

    this.checkOut = function () {
    }



    this.totalPrice = function () {

      var price = 0;

      for (var i = 0; i < _cart.length; i++) {
        price += _cart[i].price

      }

      return price;

    }



  })














