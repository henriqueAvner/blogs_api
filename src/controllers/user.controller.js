const { userService } = require('../services');
const httpMapCode = require('../utils/httpCodeMapper');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const { status, data } = await userService.serviceLogin(email, password);
  return res.status(httpMapCode[status]).json(data);
};

module.exports = {
  loginController,
};