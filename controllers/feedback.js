const feedbackSchema = require('../models/feedback');

const feedbackCreate = async (req, res) => {
    try {
        const createFeedback = new feedbackSchema(req.body);
        const save = await createFeedback.save();
        res.status(201).send(save);
    } catch (error) {
        res.status(401).send(error);
    }
}

const feedbackGet = async (req, res) => {
    try {
        const getFeedback = await feedbackSchema.find();
        res.status(201).send(getFeedback);
    } catch (error) {
        res.status(401).send(error);
    }
}

const feedbackDeleteById = async (req, res) => {
    try {
        const deleteFeedback = await feedbackSchema.findByIdAndDelete(req.params.id);
        res.send(deleteFeedback);
    } catch (error) {
        res.status(500).send(error);
    }
}

const feedbackDeleteAll = async (req, res) => {
    try {
        const deleteFeedback = await feedbackSchema.deleteMany();
        res.send(deleteFeedback);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    feedbackCreate,
    feedbackGet,
    feedbackDeleteById,
    feedbackDeleteAll
}