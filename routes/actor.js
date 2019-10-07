var express = require('express');
const { getAllActors, updateActor } = require('../controllers/actors');
const { validateUnchangedParams, validateActorExist } = require('../middlewares/actor');
var router = express.Router();

// Routes related to actor.
router.get('/', getAllActors);
router.put('/', validateActorExist, validateUnchangedParams, updateActor);

module.exports = router;