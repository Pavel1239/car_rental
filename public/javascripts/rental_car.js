var app = angular.module('rental_car', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
    })

    .when('/contact', {
      templateUrl: 'partials/contact.html'
    })
    .when('/about', {
      templateUrl: 'partials/about.html'
    })
    .when('/car', {
      templateUrl: 'partials/car/car.html',
      controller: 'CarCtrl'
    })

    .when('/car/:id', {
      templateUrl: 'partials/car/add_car.html',
      controller: 'EditCarCtrl'
    })

    .when('/car/delete/:id', {
      templateUrl: 'partials/car/delete_car.html', 
      controller: 'DeleteCarCtrl'
      })
    
      .when('/add_car', {
      templateUrl: 'partials/car/add_car.html',
      controller: 'AddCarCtrl'

    })

    .when('/client', {
      templateUrl: 'partials/client/client.html',
      controller: 'ClientCtrl'
    })

    .when('/client/:id', {
      templateUrl: 'partials/client/add_client.html',
      controller: 'EditClientCtrl'
    })

    .when('/client/delete/:id', {
      templateUrl: 'partials/client/delete_client.html', 
      controller: 'DeleteClientCtrl'
      })

    .when('/add_client', {
      templateUrl: 'partials/client/add_client.html',
      controller: 'AddClientCtrl'
    })

    .when('/contract', {
      templateUrl: 'partials/contract/contract.html',
      controller: 'ContractCtrl'
    })

    .when('/contract/:id', {
      templateUrl: 'partials/contract/add_contract.html',
      controller: 'EditContractCtrl'
    })

    .when('/contract/delete/:id', {
      templateUrl: 'partials/contract/delete_contract.html', 
      controller: 'DeleteContractCtrl'
      })

    .when('/add_contract', {
      templateUrl: 'partials/contract/add_contract.html',
      controller: 'AddContractCtrl'
    })

}]);

app.controller('CarCtrl', ['$scope', '$resource',
  function ($scope, $resource) {
    var Cars = $resource('/api/car');
    Cars.query(function (car) {
      $scope.car = car;
    });
  }
]);

app.controller('ClientCtrl', ['$scope', '$resource',
  function ($scope, $resource) {
    var Clients = $resource('/api/client');
    Clients.query(function (client) {
      $scope.client = client;
    });
  }
]);

app.controller('ContractCtrl', ['$scope', '$resource',
  function ($scope, $resource) {
    var Contracts = $resource('/api/contract');
    Contracts.query(function (contract) {
      $scope.contract = contract;
    });
  }
]);


app.controller('AddCarCtrl', ['$scope', '$resource', '$location',
  function ($scope, $resource, $location) {
    $scope.save = function () {
      var Cars = $resource('/api/car');
      Cars.save($scope.car, function () {
        $location.path('/car');
      });
      Cars.query(function (car) {
        $scope.car = car;
      });
    };
  }
]);

app.controller('AddContractCtrl', ['$scope', '$resource', '$location',
  function ($scope, $resource, $location) {
    $scope.save = function () {
      var Contracts = $resource('/api/contract');
      Contracts.save($scope.contract, function () {
        $location.path('/contract');
      });
    };
  }
]);

app.controller('AddClientCtrl', ['$scope', '$resource', '$location',
  function ($scope, $resource, $location) {
    $scope.save = function () {
      var Clients = $resource('/api/client');
      Clients.save($scope.client, function () {
        $location.path('/client');
      });
    };
  }
]);

app.controller('EditCarCtrl', ['$scope', '$resource', '$location', '$routeParams',
  function ($scope, $resource, $location, $routeParams) {
    var Cars = $resource('/api/car/:id', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    Cars.get({
      id: $routeParams.id
    }, function (car) {
      $scope.car = car;
    });

    $scope.save = function () {
      Cars.update($scope.car, function () {
        $location.path('/car');
      });
    }
  }
]);

app.controller('EditClientCtrl', ['$scope', '$resource', '$location', '$routeParams',
  function ($scope, $resource, $location, $routeParams) {
    var Clients = $resource('/api/client/:id', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    Clients.get({
      id: $routeParams.id
    }, function (client) {
      $scope.client = client;
    });

    $scope.save = function () {
      Clients.update($scope.client, function () {
        $location.path('/client');
      });
    }
  }
]);

app.controller('EditContractCtrl', ['$scope', '$resource', '$location', '$routeParams',
  function ($scope, $resource, $location, $routeParams) {
    var Contracts = $resource('/api/contract/:id', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    Contracts.get({
      id: $routeParams.id
    }, function (contract) {
      $scope.contract = contract;
    });

    $scope.save = function () {
      Contracts.update($scope.contract, function () {
        $location.path('/contract');
      });
    }
  }
]);

app.controller('DeleteCarCtrl', ['$scope', '$resource', '$location', '$routeParams',
  function ($scope, $resource, $location, $routeParams) {
    var Cars = $resource('/api/car/:id');

    Cars.get({
      id: $routeParams.id
    }, function (car) {
      $scope.car = car;
    })

    $scope.delete = function () {
      Cars.delete({
        id: $routeParams.id
      }, function (car) {
        $location.path('/car');
      });
    }
  }
]);

app.controller('DeleteClientCtrl', ['$scope', '$resource', '$location', '$routeParams',
  function ($scope, $resource, $location, $routeParams) {
    var Clients = $resource('/api/client/:id');

    Clients.get({
      id: $routeParams.id
    }, function (client) {
      $scope.client = client;
    })

    $scope.delete = function () {
      Clients.delete({
        id: $routeParams.id
      }, function (client) {
        $location.path('/client');
      });
    }
  }
]);

app.controller('DeleteContractCtrl', ['$scope', '$resource', '$location', '$routeParams',
  function ($scope, $resource, $location, $routeParams) {
    var Contracts = $resource('/api/contract/:id');

    Contracts.get({
      id: $routeParams.id
    }, function (contract) {
      $scope.contract = contract;
    })

    $scope.delete = function () {
      Contracts.delete({
        id: $routeParams.id
      }, function (contract) {
        $location.path('/contract');
      });
    }
  }
]);