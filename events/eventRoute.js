const express = require("express");
const router = express.Router();
const EventController = require('./eventController');
const validate = require("express-validation");
const validations = require("./eventRouteValidation");

router

    .post('/createEvent', validate(validations.checkEventSchema), (req, res) => {
        const response = {
            success: false,
            message: "",
            data: {}
        };
        EventController.createEvent(req.body)
        .then(data => {
            if (!data) {
              response.success = false;
              response.message = "Something went wrong";
              return res.status(500).json(response);
            } else {
              response.success = true;
              response.message = "Success !!";
              response.data = data;
              return res.status(200).json(response);
            }
        })
        .catch( error => {
            response.success = false;
            response.message = error.message;
            return res.json(response);
        })
    })

    .get('/allEvents', (req, res) => {
        const response = {
            success: false,
            message: "",
            data: {}
        };
        EventController.getAllEvents(req.body)
        .then(data => {
            if (!data) {
              response.success = false;
              response.message = "Something went wrong";
              return res.status(500).json(response);
            } else {
              response.success = true;
              response.message = "Success !!";
              response.data = data;
              return res.status(200).json(response);
            }
        })
        .catch( error => {
            response.success = false;
            response.message = error.message;
            return res.status(403).json(response);
        })
    })

    .get('/event', (req, res) => {
        const response = {
            success: false,
            message: "",
            data: {}
        };
        EventController.getEvent(req.query)
        .then(data => {
            if (!data) {
              response.success = false;
              response.message = "Something went wrong";
              return res.status(500).json(response);
            } else {
              response.success = true;
              response.message = "Success !!";
              response.data = data;
              return res.status(200).json(response);
            }
        })
        .catch( error => {
            response.success = false;
            response.message = error.message;
            return res.status(403).json(response);
        })
    })
    
    .get('/eventToday', (req, res) => {
        const response = {
            success: false,
            message: "",
            data: {}
        };
        EventController.eventToday(req.query)
        .then(data => {
            if (!data) {
              response.success = false;
              response.message = "Something went wrong";
              return res.status(500).json(response);
            } else {
              response.success = true;
              response.message = "Success !!";
              response.data = data;
              return res.status(200).json(response);
            }
        })
        .catch( error => {
            response.success = false;
            response.message = error.message;
            return res.status(403).json(response);
        })
    })

module.exports = router;