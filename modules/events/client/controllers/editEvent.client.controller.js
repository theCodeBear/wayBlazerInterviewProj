'use strict';

angular.module('events')

.controller('EditEventCtrl', ['$scope', '$http', '$state', 'event', 'Event', function($scope, $http, $state, event, Event) {

  $scope.event = event;
  $scope.event.startDate = new Date(Date.parse(event.startDate));
  $scope.event.endDate = new Date(Date.parse(event.endDate));

  $scope.editEvent = function(updatedEvent) {
    Event.update(updatedEvent).then(function(response) {
      console.log('response', response);
      $state.go('events');
    }).catch(function(err) {
      console.log('err', err);
      alert('Error updating event');
    });
  };

}]);