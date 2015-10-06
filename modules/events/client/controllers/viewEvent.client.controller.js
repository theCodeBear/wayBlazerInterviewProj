'use strict';

angular.module('events')

.controller('ViewEventCtrl', ['$scope', 'event', function($scope, event) {

  $scope.event = event;

}]);