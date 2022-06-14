const mongoose = require("mongoose");
const validator = require("validator");

const new_mongoose = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchemas",
        // required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const feedbackSchema = new mongoose.model("feedbackSchema", new_mongoose);
module.exports = feedbackSchema;