'use strict';

angular.module('events')

.factory('Event', ['$http', function($http) {

  var events = [];
  var passedEvent = {};

  var service = {
    get: get,
    create: create,
    update: update,
    delete: destroy,
    store: store,
    retrieve: retrieve
  };

  return service;

  function get() {
    return $http.get('api/events');
  }

  function create(event) {
    return $http.post('api/events/create', event);
  }

  function update(event) {
    events[events.indexOf(_.find(events, {_id: event._id}))] = event;
    return $http.put('api/events/update/' + event._id, event);
  }

  function destroy(eventId) {
    events.splice(events.indexOf(_.find(events, {_id: eventId})), 1);
    return $http.delete('api/events/delete/' + eventId);
  }

  function store(theEvents) {
    events = theEvents;
  }

  function retrieve() {
    return events;
  }

}]);