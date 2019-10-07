const { sequelize } = require('../models');
const { handleResponse } = require('../helpers/utils');

var getAllActors = async (req, res) => {
	let actors;
	try {
		actors = await sequelize.query(
			`SELECT actors.id, login, avatar_url FROM actors
				INNER JOIN EVENTS ON actors.id = events.actorId 
				GROUP BY events.actorId 
				ORDER BY COUNT(events.actorId) DESC, events.created_at DESC`
			);
	} catch(e){
		return handleResponse(res);
	}
	return handleResponse(res, 200, actors[0]);
};

var updateActor = async (req, res) => {
	let { actor, body } = req;
	try {
		actor = await actor.update(body);
	} catch(e) {
		return handleResponse(res);
	}
	return handleResponse(res, 200, actor);
};

var getStreak = () => {

};


module.exports = {
	updateActor: updateActor,
	getAllActors: getAllActors,
	getStreak: getStreak
};

















