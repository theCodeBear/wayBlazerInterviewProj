'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');

/**
 * Extend event's controller
 */
module.exports = _.extend(
  // require('./events/events.authentication.server.controller'),
  // require('./events/events.authorization.server.controller'),
  // require('./events/events.password.server.controller'),
  require('./events/events.profile.server.controller')
);
