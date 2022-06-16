const valid = require("validator");

const Updatevalidator = async (req, res, next) => {
    try {
        const { name, number, email, password, } = req.body;
        if (valid.isEmpty(name)) {
            res.json({ messsage: "Name not be empty" });
        }
        else if (valid.isEmpty(number)) {
            res.json({ messsage: "number no is not empty" });
        }
        else if (valid.isEmpty(email)) {
            res.json({ messsage: "Email not be empty" });
        }
        else if (valid.isEmpty(password)) {
            res.json({ messsage: "The password is not empty" });
        }
        else if (!valid.isEmail(email)) {
            res.json({ messsage: "This email is not in a correct format" });
        }
        else if (number.length < 10) {
            res.json({ messsage: "number no should be 10 digit" });
        }
        else if (!valid.isStrongPassword(password)) {
            res.json({ messsage: "minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10" })
        }
        else {
            next();
        }
    } catch (error) {
        res.json({ messsage: "All fields must be define" });
    }
}

const feedback = async (req, res, next) => {
    try {
        const { name, email, subject, message } = req.body;
        if (valid.isEmpty(name)) {
            res.json({ messsage: "Name not be empty" });
        }
        else if (valid.isEmpty(email)) {
            res.json({ messsage: "Email no is not empty" });
        }
        else if (valid.isEmpty(subject)) {
            res.json({ messsage: "Subject not be empty" });
        }
        else if (valid.isEmpty(message)) {
            res.json({ messsage: "Message is not empty" });
        }
        else if (!valid.isEmail(email)) {
            res.json({ messsage: "This email is not in a correct format" });
        }
        else {
            next();
        }
    } catch (error) {
        res.json({ messsage: "All fields must be define" });
    }
}

const ticket = async (req, res, next) => {
    try {
        const { name, mobile, email, dateOfVisit } = req.body;
        const { kids, adult, srCitizen } = req.body.person;
        if (valid.isEmpty(name)) {
            res.json({ messsage: "Name not be empty" });
        }
        else if (valid.isEmpty(email)) {
            res.json({ messsage: "Email not be empty" });
        }
        else if (valid.isEmpty(mobile)) {
            res.json({ messsage: "number no is not empty" });
        }
        else if (valid.isEmpty(kids)) {
            res.json({ messsage: "The kids is not empty" });
        }
        else if (valid.isEmpty(adult)) {
            res.json({ messsage: "The adult is not empty" });
        }
        else if (valid.isEmpty(srCitizen)) {
            res.json({ messsage: "The srCitizen is not empty" });
        }
        else if (valid.isEmpty(dateOfVisit)) {
            res.json({ messsage: "The dateOfVisit is not empty" });
        }
        else if (dateOfVisit >= Date.now) {
            res.json({ messsage: "Please Enter Valide date" });
        }
        else if (!valid.isEmail(email)) {
            res.json({ messsage: "This email is not in a correct format" });
        }
        else {
            next();
        }
    } catch (error) {
        res.json({ messsage: "All fields must be define" });
    }
}

const pay = async (req, res, next) => {
    try {
        const { name, currency, ticketId } = req.body;
        if (valid.isEmpty(name)) {
            res.json({ messsage: "Name not be empty" });
        }
        else if (valid.isEmpty(currency)) {
            res.json({ messsage: "currency not be empty" });
        }
        else if (valid.isEmpty(ticketId)) {
            res.json({ messsage: "ticketId no is not empty" });
        }
        else {
            next();
        }
    } catch (error) {
        res.json({ messsage: "All fields must be define" });
    }
}

module.exports = {
    Updatevalidator,
    feedback,
    ticket,
    pay
};