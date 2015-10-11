'use strict';

// Setting up route
angular.module('events')

.run(['$http', 'Event', function($http, Event) {
  Event.get().then(function(response) {
    Event.store(response.data);
  }).catch(function(err) {
    alert('err in getting events on reload');
  });
}])

.config(['$stateProvider',
  function ($stateProvider) {

    // Home state routing
    $stateProvider
    
    .state('events', {
      url: '/events',
      templateUrl: 'modules/events/views/events.client.view.html',
      controller: 'EventsCtrl'
    })

    .state('addEvent', {
      url: '/addEvent',
      templateUrl: 'modules/events/views/addEvent.client.view.html',
      controller: 'AddEventCtrl'
    })

    .state('editEvent', {
      url: '/edit/:eventId',
      templateUrl: 'modules/events/views/editEvent.client.view.html',
      controller: 'EditEventCtrl',
    })

    .state('viewEvent', {
      url: '/events/:eventId',
      templateUrl: 'modules/events/directives/templates/viewEvent.html',
      controller: 'ViewEventCtrl'
    });
  }
]);
