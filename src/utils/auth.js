const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secretJWT';

const JWT_CONFIG = {
  algorithm: 'HS256',
  
};

const createToken = (payload) => 
  jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

const decodeToken = (token) =>
  jwt.verify(token, JWT_SECRET);

module.exports = {
  createToken,
  decodeToken,
};