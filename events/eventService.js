"use strict";

let Event = require('./event');

let service  = {};

service.createEvent = function(objToSave) {
    var newEvent = new Event(objToSave);
    return newEvent.save();
};

service.getOneEvent = function(criteria, projection, options) {
    return Event.findOne(criteria, projection, options);
};

service.getEvents = function(criteria, projection, options) {
    return Event.find(criteria, projection, options).exec();
};

module.exports = service;