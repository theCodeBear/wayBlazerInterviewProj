'use strict';

var Event = require('../../models/event.server.model');

exports.index = function(req, res) {
  Event.find({}, function(err, events) {
    if (err) return res.status(400);
    // console.log('events', events);
    res.send(events);
  });
};

exports.create = function(req, res) {
  console.log(req.body);
  Event.create(req.body, function(err, event) {
    if (err) return res.status(500).send(err);
    res.send(event);
  });
};

exports.delete = function(req, res) {
  console.log('file id to be destroyed', req.params);
  Event.findByIdAndRemove(req.params.eventId, function(err) {
    if (err) return res.send('ERROR', err);
    return res.status(200).send();
  });
};

exports.update = function(req, res) {
  console.log('updated event', req.body);
  Event.findByIdAndUpdate(req.params.eventId, req.body, {new:true}, function(err, event) {
    if (err) return res.status(500).send(err);
    return res.send(event);
  });
};