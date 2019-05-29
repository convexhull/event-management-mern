"use strict";


const Joi = require("joi");



const checkEventSchema = {
  
  body: {
    title : Joi.string().required(),
    description : Joi.string().required(),
    location : Joi.object().required(),
    start : Joi.string().required(),
    end : Joi.string().required(),
    locationName : Joi.string().required()
  }

};





module.exports = {
  checkEventSchema,
};
