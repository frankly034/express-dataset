const Validator = require('validatorjs');
const { handleResponse } = require('../../helpers/utils');
const eventRule = {
  id: 'required|numeric',
  type: 'required|string',
  created_at: 'required|date',
  actor: {
    id: 'required|numeric',
    login: 'required|string',
    avatar_url: 'url'
  },
  repo: {
    id: 'required|numeric',
    name: 'required|string',
    url: 'required|url'
  },
};

const validateNewEvent = (req, res, next) => {
  const { body } = req;
  const validation = new Validator(body, eventRule);
  return validation.fails() ? handleResponse(res) : next();
}

module.exports = {
  validateNewEvent
}
