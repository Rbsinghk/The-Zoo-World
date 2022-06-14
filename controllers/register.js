const multer = require('multer');
const userSchema = require('../models/user');
const bcrypt = require('bcrypt');

const Storage = multer.diskStorage({
    destination: 'public/userProfileImage',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: Storage
}).single('userProfileImage');

const register = async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log("err");
        }
        else {
            const newuser = new userSchema(req.body);
            newuser.save()
                .then(() => res.json({
                    message: 'Success',
                    // file: `uploads/${req.file.filename}`
                }))
                .catch((err) => res.send(err));
        }
    })
}

const login = async (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let number = req.body.number;
        const userMail = await userSchema.findOne({ email }) || await userSchema.findOne({ number });
        const isMatch = await bcrypt.compare(password, userMail.password);
        const token = await userMail.generateAuthToken();
        if (isMatch) {
            res.status(201).send({ message: "Login Success", data: token });
        }
        else {
            res.send("Invalid Username or Password 11");
        }
    } catch (error) {
        res.status(401).send("Invalid Username or Password");
    }
}

module.exports = {
    register,
    login
}