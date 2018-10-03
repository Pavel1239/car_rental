var app = angular.module('rental_car', ['ngResource', 'ngRoute']);

// GET /api/car/ {
//   id
// }
// PUT /api/car / {
//   id
// }
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/add-car', {
      templateUrl: 'partials/car_form.html',
      controller: 'AddCarCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('HomeCtrl', ['$scope', '$resource',
  function($scope, $resource) {
    var Car = $resource('/api/car');
    Car.query(function(car) {
      $scope.car = car;
    });
  }
]);

app.controller('AddCarCtrl', ['$scope', '$resource', '$location',
  function($scope, $resource, $location) {
    $scope.save = function() {
      var Car = $resource('/api/car');
      Car.save($scope.car, function() {
        $location.path('/');
      });
    };
  }
]);
