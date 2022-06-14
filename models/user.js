const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const new_mongoose = new mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        match: /^(\()?\d{3}(\))?(|\s)?\d{3}(|\s)\d{4}$/,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error("Mobile Number is invalid")
            }
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }")
            }
        }
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//Generating tokens
new_mongoose.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id.toString() }, process.env.TOKEN_CODE)
        return token;
    } catch (error) {
        res.send("the error part" + error)
    }
}

//Converting password into Hash
new_mongoose.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 5);
    }
    next();
})

const userSchema = new mongoose.model("userSchema", new_mongoose);
module.exports = userSchema

