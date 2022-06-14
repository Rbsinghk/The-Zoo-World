const multer = require('multer');
const animalSchema = require('../models/animals');

const Storage = multer.diskStorage({
    destination: 'public/animalsImage',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: Storage
}).single('animalImage');

const createAnimal = async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log("err");
        }
        else {
            const newAnimal = new animalSchema(req.body);
            newAnimal.save()
                .then(() => res.json({
                    message: 'Success',
                    // file: `uploads/${req.file.filename}`
                }))
                .catch((err) => res.send(err));
        }
    })
}

const getAllAnimal = async (req, res) => {
    try {
        const getAllAnimal = await animalSchema.find(req.body);
        res.status(201).send(getAllAnimal);
    } catch (error) {
        res.status(401).send(error);
    }
}

const getAnimalById = async (req, res) => {
    try {
        const _id = req.params.id;
        const getAnimalProfile = await animalSchema.findById(_id);
        res.send(getAnimalProfile);
    } catch (error) {
        res.status(error);
    }
}

const updateAnimal = async (req, res) => {
    try {
        const _id = req.params.id;
        const animalProfileUpdate = await animalSchema.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(animalProfileUpdate);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteAnimal = async (req, res) => {
    try {
        const animalProfileDelete = await animalSchema.findByIdAndDelete(req.params.id);
        res.send(animalProfileDelete);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createAnimal,
    getAllAnimal,
    getAnimalById,
    updateAnimal,
    deleteAnimal
};