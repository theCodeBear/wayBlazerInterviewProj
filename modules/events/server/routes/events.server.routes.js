'use strict';

module.exports = function(app) {

  var events = require('../controllers/events.server.controller');

  app.route('/api/events').get(events.index);
  app.route('/api/events/create').post(events.create);
  app.route('/api/events/delete/:eventId').delete(events.delete);
  app.route('/api/events/update/:eventId').put(events.update);

};