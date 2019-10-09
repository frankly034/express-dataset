var express = require('express');
const { addEvent, getAllEvents, getByActor } = require('../controllers/events');
const { validateNonexistentEvent } = require('../middlewares/event');
const { validateNewEvent } = require('../middlewares/validations/event');
var router = express.Router();

// Routes related to event
router.post('/', validateNewEvent, validateNonexistentEvent, addEvent);
router.get('/', getAllEvents);
router.get('/actors/:actorId', getByActor);

module.exports = router;