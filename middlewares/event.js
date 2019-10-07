const { Event } = require('../models');
const { handleResponse } = require('../helpers/utils');

const validateNonexistentEvent = async (req, res, next) => {
  let event;
  const { id } = req.body;
  try {
    event = await Event.findByPk(id);
  } catch(e) {
    return handleResponse(res);
  }
  return event ? handleResponse(res) : next();
}

module.exports = {
  validateNonexistentEvent
}