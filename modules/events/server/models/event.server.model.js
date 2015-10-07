'use strict';

var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  title:        { type: String, required: true },
  startDate:    { type: Date, required: true },
  endDate:      { type: Date, required: true },
  category:     { type: String},
  description:  { type: String, required: true },
  featured:     { type: Boolean, default: false },
  createdAt:    { type: Date, default: Date.now, required: true },
  updatedAt:    { type: Date, default: Date.now, required: true }
});

var Event = mongoose.model('Event', eventSchema);
module.exports = Event;