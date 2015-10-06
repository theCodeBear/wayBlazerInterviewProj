'use strict';

angular.module('events')

.controller('AddEventCtrl', ['$scope', '$http', 'Event', function($scope, $http, Event) {

  $scope.addEvent = function() {
    console.log($scope.event);
    document.getElementById('eventSubmitButton').disabled = true;
    if (!$scope.event.featured) $scope.event.featured = false;

    Event.create($scope.event).then(function(response) {
      console.log('it worked', response);
      $scope.eventSucceeded = true;
      $scope.event = {};
      document.getElementById('eventSubmitButton').disabled = false;
    }).catch(function(err) {
      console.log('err', err.data);
      $scope.eventFailed = true;
      document.getElementById('eventSubmitButton').disabled = true;
    });
  };

}]);