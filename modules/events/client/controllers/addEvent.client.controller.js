'use strict';

angular.module('events')

.controller('AddEventCtrl', ['$scope', '$http', 'Event', function($scope, $http, Event) {

  $scope.addEvent = function() {
    $scope.submitProcessing = true;
    $scope.eventFailed = false;
    $scope.eventSucceeded = false;
    if (!$scope.event.featured) $scope.event.featured = false;
    if ($scope.event.startDate <= $scope.event.endDate) {
      createEvent($scope.event);
    } else {
      $scope.eventFailed = true;
      $scope.submitProcessing = false;
    }
  };

  function createEvent(event) {
    Event.create(event).then(function(response) {
      var events = Event.retrieve();
      events.push(response.data);
      Event.store(events);
      $scope.eventSucceeded = true;
      $scope.event = {};
    }).catch(function(err) {
      $scope.eventFailed = true;
    }).finally(function() {
      $scope.submitProcessing = false;
    });
  }

}]);