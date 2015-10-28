var app = angular.module('userProfiles');

app.service('mainService', function($http) {
  this.getUsers = function() {
    return $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1' 
    });
  }
});

// or //

/*var app = angular.module('userProfiles'); //wow

app.service('mainService', function($http) {

  this.getUsers = function(pageNum) {
    return $http({
      method: 'GET',
      url: 'http://reqr.es/api/users?page=' + pageNum
    }).then(function(response){
        return response.data;  
    });
  };
});*/
