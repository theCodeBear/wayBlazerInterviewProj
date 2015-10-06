'use strict';

angular.module('events')

.controller('EventsCtrl', ['$scope', '$http', function($scope, $http) {

$http.get('/events').then(function(response) {
  console.log('response', response);
}).catch(function(err) {
  console.log('err', err);
});

}]);