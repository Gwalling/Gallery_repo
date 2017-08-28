var app = angular.module("galleryWebsite", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })


    // Paintings
   .state("paintings", {
      url: "/paintings",
      templateUrl: "./views/paintings_index.html",
      controller: "paintingController"
    })
       .state("newPaintings", {
        url: '/paintings/new',
        templateUrl: "./views/paintings_form.html",
        controller: "paintingController"
      })
      .state("showPainting", {
        url: '/paintings/:id',
        templateUrl: "./views/paintings_show.html",
        controller: "paintingController"
      })
      .state("editPainting", {
        url: '/paintings/:id/edit',
        templateUrl: "./views/paintings_form.html",
        controller: "paintingController"
      })

    
    // Users
    .state("users", {
      url: '/users',
      templateUrl: "./views/users_index.html",
      controller: "userController"
    })
      .state("newUsers", {
        url: '/users/new',
        templateUrl: "./views/users_form.html",
        controller: "userController"
      })
      .state("showUser", {
        url: '/users/:id',
        templateUrl: "./views/users_show.html",
        controller: "userController"
      })
      .state("editUser", {
        url: '/users/:id/edit',
        templateUrl: "./views/users_form.html",
        controller: "userController"
      })


      // Cart

       .state("cart", {
        url: '/checkout',
        templateUrl: "./views/cart.html",
        controller: "cartController"
      })








    // Bio
    .state("bio", {
      url: '/bio',
      templateUrl: "./views/bio_index.html",
      controller: "bioController"
    })

    

    // Shop

    .state("shop", {
      url: '/shop',
      templateUrl: "./views/shop_index.html",
      controller: "shopController"
    })

    // Contact

    .state("contact", {
      url: '/contact',
      templateUrl: "./views/contact_index.html",
      controller: "contactController"

    })

})































