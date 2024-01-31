const { decodeToken } = require('../utils/auth');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  const [, token] = authorization.split(' ');
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decodedData = decodeToken(token);
    req.locals = decodedData;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};