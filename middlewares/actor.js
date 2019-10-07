const { Actor } = require('../models');
const { handleResponse } = require('../helpers/utils');

const validateActorExist = async (req, res, next) => {
  let actor;
  const { id } = req.body;
  try {
    actor = await Actor.findByPk(id);
  } catch(e) {
    return handleResponse(res, 404);
  }
  req.actor = actor;
  return actor ? next() : handleResponse(res, 404);
}

const validateUnchangedParams = (req, res, next) => {
  let flag = true;
  const { actor, body } = req;
  const { avatar_url, ...unchangedParams } = body;
  Object.keys(unchangedParams).forEach(field => {
    if(actor[field] !== body[field]){
      flag = false;
    }
  });
  return flag ? next() : handleResponse(res);
}

module.exports = {
  validateActorExist,
  validateUnchangedParams
}