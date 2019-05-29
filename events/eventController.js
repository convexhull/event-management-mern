const EventService = require('./eventService');
const moment = require('moment');


const _event = {};

_event.createEvent = function(payloadData) {
    return new Promise( (resolve, reject) => {
        let startdate = moment(payloadData.start).startOf('day');
        let enddate = moment(payloadData.end).endOf('day');
        payloadData.start = startdate.format();
        payloadData.end = enddate.format();
        let criteria = {
            start : {
                "$lte" : payloadData.end,
            },
            end : {
                "$gte" : payloadData.start
            }
        }
        let projections = {};
        EventService.getOneEvent(criteria)
            .then ( event => {
                if(event) {
                    reject(new Error("event_overlap_error"))
                }
                else {
                    return EventService.createEvent(payloadData);
                }
            })
            .then ( event => {
                resolve(event);             // null value of event to be checked for in eventRoute.js -> return 500 if null
            })
            .catch ( error => {
                reject(error);
            })
    })
}


_event.getAllEvents = function(payloadData) {
    return new Promise( (resolve, reject) => {
        let criteria = {};
        let projections = {};
        let options = {
            sort : {
                start : 1
            }
        }
        EventService.getEvents(criteria,projections,options)
            .then ( data => {
                let events = [];
                if(data) {
                    events = data;
                }
                resolve(events);
            })
            .catch ( error => {
                reject(error);
            })
    })
}


_event.getEvent = function(payloadData) {
    return new Promise( (resolve, reject) => {
        let criteria = {
            _id : payloadData.id
        };
        EventService.getOneEvent(criteria)
            .then ( data => {
                let event = {};
                if(data) {
                    event = data;
                }
                //else send {}
                resolve(event);
            })
            .catch ( error => {
                reject(error);
            })
    })
}


_event.eventToday = function(payloadData) {

    return new Promise((resolve, reject) => {
        let dateStart = moment().startOf('day');
        let dateEnd = moment().endOf('day');
        let criteria = {
            start : {
                "$lte" : dateEnd
            },
            end : {
                "$gte" : dateStart
            }
        }

        EventService.getOneEvent(criteria)
            .then ( data => {
                if(!data) {
                    resolve({});
                }
                else {
                    resolve(data);
                }
            })
            .catch ( error => {
                reject(error);
            })
    })
}
module.exports = _event;