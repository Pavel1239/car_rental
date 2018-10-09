var app = angular.module('rental_car', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/contract.html',
        controller: 'ContractCtrl'
    })
    .when('/car', {
      templateUrl: 'partials/car.html',
      controller: 'CarCtrl'
    })
    .when('/client', {
      templateUrl: 'partials/client.html',
        controller: 'ClientCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('CarCtrl', ['$scope', '$resource', '$location',
  function($scope, $resource, $location) {
    $scope.save = function() {
      var Cars = $resource('/api/car');
      Cars.save($scope.car, function() {
        $location.path('/car');
      });
    };
  }
]);

app.controller('ContractCtrl', ['$scope', '$resource', '$location',
  function($scope, $resource, $location) {
    $scope.save = function() {
      var Contracts = $resource('/api/contract');
      Contracts.save($scope.contract, function() {
        $location.path('/');
      });
    };
  }
]);

app.controller('ClientCtrl', ['$scope', '$resource', '$location',
  function($scope, $resource, $location) {
    $scope.save = function() {
      var Clients = $resource('/api/client');
      Clients.save($scope.client, function() {
        $location.path('/');
      });
    };
  }
]);
