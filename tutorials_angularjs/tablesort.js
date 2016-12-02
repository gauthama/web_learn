var myApp = angular.module("myApp", []);



myApp.controller("PurchasesCtrl",function($scope) {
  $scope.purchases = {};
  
  $scope.purchases.data = [{
    username: "suraj kumar gosi",
    usertype: "sponer",
    age: "20"
  }, {
    username: "kao kumar gosi",
    usertype: "clinet",
    age: "26"
  }, {
    username: "surdfsdfaj kumar gosi",
    usertype: "clinfsdfset",
    age: "50"
  }];

  $scope.sort = {
    active: '',
    descending: undefined
  }

  $scope.changeSorting = function(column) {

    var sort = $scope.sort;

    if (sort.active == column) {
      sort.descending = !sort.descending;

    } else {
      sort.active = column;
      sort.descending = false;
    }
  };

  $scope.getIcon = function(column) {

    var sort = $scope.sort;

    if (sort.active == column) {
      return sort.descending ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down';
    }

    return 'glyphicon-star';
  }
});
