const { User } = require('../models');
const { createToken } = require('../utils/auth');
const serviceResponse = require('../utils/messages');

const serviceLogin = async (email, password) => {
  if (!email || !password) {
    return { status: serviceResponse.INVALID_DATA,
      data: {
        message: 'Some required fields are missing',
      } };
  }
  
  const currUser = await User.findOne({ where: { email, password } });

  if (!currUser) {
    return { status: serviceResponse.INVALID_DATA,
      data: {
        message: 'Invalid fields',
      } };
  }
 
  const payload = { id: currUser.id };
  const token = createToken(payload);
  return { status: serviceResponse.SUCCESS, data: { token } };
};

module.exports = {
  serviceLogin,
};