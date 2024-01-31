const { userService } = require('../services');
const httpMapCode = require('../utils/httpCodeMapper');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const { status, data } = await userService.serviceLogin(email, password);
  return res.status(httpMapCode[status]).json(data);
};

const addUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, data } = await userService.addUser(displayName, email, password, image);
  return res.status(httpMapCode[status]).json(data);
};

const getAllUsers = async (req, res) => {
  const { status, data } = await userService.getAllUsers();
  return res.status(httpMapCode[status]).json(data);
};

module.exports = {
  loginController,
  addUserController,
  getAllUsers,
};
