'use strict';

angular.module('events')

.factory('Event', ['$http', function($http) {

  var featuredEvents = [];
  var events = [];
  var passedEvent = {};

  var service = {
    get: get,
    create: create,
    update: update,
    delete: destroy,
    pass: pass,
    getPassedEvent: getPassedEvent
  };

  return service;

  function get() {
    return $http.get('api/events');
  }

  function create(event) {
    return $http.post('api/events/create', event);
  }

  function update(event) {
    return $http.put('api/events/update/' + event._id, event);
  }

  function destroy(eventId) {
    return $http.delete('api/events/delete/' + eventId);
  }

  function pass(event) {
    passedEvent = event;
  }

  function getPassedEvent() {
    var temp = passedEvent;
    passedEvent = {};
    return temp;
  }


}]);