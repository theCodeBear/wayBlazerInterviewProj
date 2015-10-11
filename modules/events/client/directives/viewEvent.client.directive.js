'use strict';

angular.module('events')

.directive('viewEvent', ['$state', 'Event', function($state, Event) {

  return {
    restrict: 'E',
    scope: {
      event: '='
    },
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        $state.go('viewEvent', {eventId: scope.event._id});
      });
    }
  };

}]);