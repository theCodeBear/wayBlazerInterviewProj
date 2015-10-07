'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');

/**
 * Extend event's controller
 */
module.exports = _.extend(
  require('./events/events.profile.server.controller')
);
