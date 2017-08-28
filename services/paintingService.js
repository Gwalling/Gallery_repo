angular
  .module("galleryWebsite")
  .service("paintingService", function ($http) {

    var _paintings = [];
    var _paintingId = 0;

    function Painting(image, collection, name, type, dimensions, style, medium, price) {
      this.image = image;
      this.collection = collection;
      this.name = name;
      this.type = type;
      this.dimensions = dimensions;
      this.style = style;
      this.medium = medium;
      this.price = price;
    }




    this.getPaintings = function (cb) {
      if (_paintings.length == 0) {
        $http.get("../db/paintings.json")
          .success(function (response) {
            _paintings = response
            cb(_paintings)
          })
          .error(function (error) {
            console.log(error);
          })
      }
      else {
        cb(_paintings)
      }
    }

    this.getPaintingById = function (id, cb) {
      if (id === undefined || id === null || id === "") {
        var painting = {
          image: "",
          collection: "",
          name: "",
          type: "",
          dimensions: "",
          style: "",
          medium: "",
          price: "",
        }
        cb(painting)
      }
      else {
        for (var i = 0; i < _paintings.length; i++) {
          if (_paintings[i].id == id) {
            cb(_paintings[i])
          }
        }
      }
    }

    this.addPainting = function (image, collection, name, type, dimensions, style, medium, price) {
      _paintings.unshift(new Painting(image, collection, name, type, dimensions, style, medium, price))
    }

    this.updatePainting = function (painting) {
      for (var i = 0; i < _paintings.length; i++) {

        if (_paintings[i].id == painting.id) {
          _paintings.splice(i, 1, painting)
        }
      }
    }


    this.deletePainting = function (id) {
      console.log(id)
      for (var i = 0; i < _paintings.length; i++) {
        if (_paintings[i].id == id) {
          _paintings.splice(i, 1)
        }
      }
    }
  })


// addToCart

var Cart = [];

this.addToCart = function (painting) {
  for (var i = 0; i < _paintings.length; i++) {
      Cart.push(painting)
    }
   deletePainting(painting)




  }
