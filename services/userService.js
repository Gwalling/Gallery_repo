angular
  .module("galleryWebsite")
  .service("userService", function ($http) {

    var _users = []
    var _userId = 10

    function User(id, firstName, lastName, email, phone, dob, street1, streer2, city, state, zip, cardNumber, cardType, security) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phone = phone;
      this.dob = dob;
      this.street1 = street1;
      this.streer2 = streer2;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.cardNumber = cardNumber;
      this.cardType = cardType;
      this.security = security;
    }

    this.getUsers = function (cb) {
      if (_users.length == 0) {
        $http.get("../db/users.json")
          .success(function (response) {
            _users = response
            cb(_users)
          })
          .error(function (error) {
            console.log(error);
          })
      }
      else {
        cb(_users)
      }
    }

    this.getUserById = function (id, cb) {
      if (id === undefined || id === null || id === "") {
        var user = {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dob: "",
          street1: "",
          street2: "",
          city: "",
          state: "",
          zip: "",
          cardNumber: "",
          cardType: "",
          security: ""
        }
        cb(user)
      }
      else {
        for (var i = 0; i < _users.length; i++) {
          if (_users[i].id == id) {
            cb(_users[i])
          }
        }
      }
    }

    this.addUser = function (user) {
      user.id = _userId++
      _users.unshift(user)
      console.log(_users);
    }

    this.updateUser = function (userId, user) {
      for (var i = 0; i < _users.length; i++) {
        if (_users[i].id == userId) {
          _users.splice(i, 1, user)
        }
      }
    }

    this.deleteUser = function (userId) {
      for (var i = 0; i < _users.length; i++) {
        if (_users[i].id == userId) {
          _users.splice(i, 1)
        }
      }
    }

  })






