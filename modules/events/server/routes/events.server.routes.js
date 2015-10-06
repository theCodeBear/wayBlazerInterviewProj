'use strict';

module.exports = function(app) {

  var events = require('../controllers/events.server.controller');

  app.route('/api/events').get(events.index);

};