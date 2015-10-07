'use strict';

var Event = require('../../models/event.server.model');

exports.index = function(req, res) {
  Event.find({}, function(err, events) {
    if (err) return res.status(400);
    res.send(events);
  });
};

exports.create = function(req, res) {
  var event = new Event(req.body);
  event.save(function(err, dbEvent) {
    if (err) return res.status(400).send(err);
    res.send(dbEvent);
  });
};

exports.delete = function(req, res) {
  Event.findByIdAndRemove(req.params.eventId, function(err) {
    if (err) return res.send('ERROR', err);
    return res.status(200).send();
  });
};

exports.update = function(req, res) {
  Event.findByIdAndUpdate(req.params.eventId, req.body, {new:true}, function(err, event) {
    if (err) return res.status(500).send(err);
    return res.send(event);
  });
};