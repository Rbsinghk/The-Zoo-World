const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const feedbackController = require('../controllers/feedback');

router.post('/feedback/create', auth, feedbackController.feedbackCreate);
router.get('/feedback/get', auth, feedbackController.feedbackGet);
router.delete('/feedback/delete/:id', auth, feedbackController.feedbackDeleteById);
router.delete('/feedback/delete', auth, feedbackController.feedbackDeleteAll);

module.exports = router;