'use strict';

var Event = require('../../models/event.server.model');

exports.index = function(req, res) {
  Event.find({}, function(err, events) {
    if (err) return res.status(400);
    console.log('events', events);
    res.send('it worked!');
  });
};