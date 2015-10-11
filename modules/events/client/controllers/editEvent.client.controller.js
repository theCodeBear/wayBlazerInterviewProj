'use strict';

angular.module('events')

.controller('EditEventCtrl', ['$scope', '$http', '$state', '$stateParams', 'Event', function($scope, $http, $state, $stateParams, Event) {

  $scope.event = _.find(Event.retrieve(), {_id: $stateParams.eventId});;
  $scope.event.startDate = new Date(Date.parse($scope.event.startDate));
  $scope.event.endDate = new Date(Date.parse($scope.event.endDate));

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