'use strict';

angular.module('events')

.controller('ViewEventCtrl', ['$scope', '$stateParams', 'Event', function($scope, $stateParams, Event) {

  $scope.event = _.find(Event.retrieve(), {_id: $stateParams.eventId});

}]);