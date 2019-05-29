"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title : { type : String },
    description : {type : String},
    location : {
        lat : String,
        lng : String
    },
    start : { type : Date },
    end : { type : Date },
    locationName : {type : String}
});

module.exports  = new mongoose.model("Event", EventSchema);