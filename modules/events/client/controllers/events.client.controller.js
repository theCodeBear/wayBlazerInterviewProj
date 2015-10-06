'use strict';

angular.module('events')

.controller('EventsCtrl', ['$scope', '$http', '$state', 'Event', function($scope, $http, $state, Event) {

  Event.get().then(function(response) {
    $scope.events = response.data;
  }).catch(function(err) {
    console.log('err', err);
  });


  $scope.deleteEvent = function(id, index) {
    Event.delete(id).then(function(response) {
      $scope.events.splice(index, 1);
    }).catch(function(err) {
      console.log('err', err);
    });
  };

  $scope.goToEdit = function(event) {
    Event.pass(event);
    $state.go('editEvent');
  };

}]);