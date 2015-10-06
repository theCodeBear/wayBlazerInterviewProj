'use strict';

// Setting up route
angular.module('events').config(['$stateProvider',
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
      url: '/editEvent',
      templateUrl: 'modules/events/views/editEvent.client.view.html',
      controller: 'EditEventCtrl',
      resolve: {
        event: function(Event) {
          return Event.getPassedEvent();
        }
      }
    })

    .state('viewEvent', {
      url: '/viewEvent/',
      templateUrl: 'modules/events/directives/templates/viewEvent.html',
      controller: 'ViewEventCtrl',
      resolve: {
        event: function(Event) {
          return Event.getPassedEvent();
        }
      }
    });
  }
]);
