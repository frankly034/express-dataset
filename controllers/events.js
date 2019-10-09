const { Event } = require('../models');
const { handleResponse } = require('../helpers/utils');

var getAllEvents = async (req, res) => {
	let events;
	try {
		events = await Event.findAll({
			attributes: ['id', 'type', 'created_at'],
			include: [{ all: true }],
			order: [ ['id', 'ASC'] ]
		})
	} catch(e){
		return handleResponse(res);
	}
	return handleResponse(res, 200, events);
};

var addEvent = async (req, res) => {
	let event;
	try{
		event = await Event.create(
			req.body, 
			{
				attributes: ['id', 'type', 'created_at'],
				include: [{ all: true }]
			});
	} catch(e) {
		return handleResponse(res);
	}
	return handleResponse(res, 201, event);
};


var getByActor = async (req, res) => {
	let events;
	const { actorId } = req.params;
	try {
		events = await Event.findAll({
			where: { actorId },
			attributes: ['id', 'type', 'created_at'],
			include: [{ all: true }],
			order: [ ['id', 'ASC'] ]
		})
	} catch(e){
		return handleResponse(res, 404);
	}
	return events.length ?
		handleResponse(res, 200, events) :
		handleResponse(res, 404);
};


var eraseEvents = async (req, res) => {
	try {
		await Event.destroy({ where: {} });
	} catch(e){
		return handleResponse(res);
	}
	return handleResponse(res, 200);
};

module.exports = {
	getAllEvents: getAllEvents,
	addEvent: addEvent,
	getByActor: getByActor,
	eraseEvents: eraseEvents
};

















