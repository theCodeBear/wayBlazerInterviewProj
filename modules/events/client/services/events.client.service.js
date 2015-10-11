'use strict';

angular.module('events')

.factory('Event', ['$http', function($http) {


  // PRIVATE VARIABLE

  var events = [];



  // PUBLIC METHODS

  var get = function() {
    return $http.get('api/events');
  };

  var create = function(event) {
    return $http.post('api/events/create', event);
  };

  var update = function(event) {
    events[events.indexOf(_.find(events, {_id: event._id}))] = event;
    return $http.put('api/events/update/' + event._id, event);
  };

  var destroy = function(eventId) {
    events.splice(events.indexOf(_.find(events, {_id: eventId})), 1);
    return $http.delete('api/events/delete/' + eventId);
  };

  var store = function(theEvents) {
    events = theEvents;
  };

  var retrieve = function() {
    return events;
  };




  return {
    get: get,
    create: create,
    update: update,
    delete: destroy,
    store: store,
    retrieve: retrieve
  };

}]);