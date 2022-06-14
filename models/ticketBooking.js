const mongoose = require("mongoose");
const validator = require("validator");

const new_mongoose = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        match: /^(\()?\d{3}(\))?(|\s)?\d{3}(|\s)\d{4}$/
    },
    person: {
        kids: {
            type: Number,
            required: true
        },
        adult: {
            type: Number,
            required: true
        },
        srCitizen: {
            type: Number,
            required: true
        },
    },
    totalAmount: {
        type: String,
        required: true,
    },
    dateOfVisit: {
        type: Date,
        required: true,
        validate(value) {
            if (!value >= Date.now) {
                throw new Error("date is invalid")
            }
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const ticketSchema = new mongoose.model("ticketSchema", new_mongoose);
module.exports = ticketSchema;