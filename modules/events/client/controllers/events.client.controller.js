'use strict';

angular.module('events')

.controller('EventsCtrl', ['$scope', '$http', function($scope, $http) {

$http.get('/api/events').then(function(response) {
  console.log('response', response);
}).catch(function(err) {
  console.log('err', err);
});

$scope.fakeData = [
  {
    title: 'blah',
    description: 'yo man this be descript'
  },
  {
    title: 'bloopitdy',
    description: 'laddy da da'
  }
];

$scope.addEvent = function() {
  $scope.fakeData.push({title:'a new event', description: 'a new descript'});
};

}]);