const { User } = require('../models');
const { createToken } = require('../utils/auth');
const serviceResponse = require('../utils/messages');
const removingPass = require('../utils/removingPass');

const serviceLogin = async (email, password) => {
  const currUser = await User.findOne({ where: { email, password } });
  if (!currUser) {
    return { status: serviceResponse.INVALID_DATA,
      data: { message: 'Invalid fields' } }; 
  }
  const payload = { id: currUser.id };
  const token = createToken(payload);
  return { status: serviceResponse.SUCCESS, data: { token } };
};
const addUser = async (displayName, email, password, image) => {
  const someUser = await User.findOne({ where: { email } });
  if (someUser) {
    return { status: serviceResponse.CONFLICT, data: { message: 'User already registered' } };
  }
  const newUser = await User.create({ displayName, email, password, image,
  });
  const payload = { id: newUser.id };
  const token = createToken(payload);
  return { status: serviceResponse.CREATED, data: { token } };
};
const getAllUsers = async () => {
  const allUsers = await User.findAll();
  const trueResult = allUsers.map((user) => removingPass(user.dataValues));
  return { status: serviceResponse.SUCCESS, data: trueResult };
};
const getUserById = async (id) => {
  const [currUser] = await User.findAll({ where: { id } });
  if (!currUser) {
    return { status: serviceResponse.NOT_FOUND, data: { message: 'User does not exist' } }; 
  } 
  const userWithoutPass = await removingPass(currUser.dataValues);
  return { status: serviceResponse.SUCCESS, data: userWithoutPass };
};
module.exports = {
  serviceLogin,
  addUser,
  getAllUsers,
  getUserById,
};