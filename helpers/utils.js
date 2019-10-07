const handleResponse = (res, status = 400, data = {}) => {
  return res.status(status).json({ status_code: status, body: {} });
};

module.exports = {
  handleResponse,
};
