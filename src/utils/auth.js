const jwt = require('jsonwebtoken');

const validToken = `eyJhbGciOiJIUzI1N
iIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA2NzEyNzU2fQ.kYTJD-PMpA7go9EVd100BpKstSjBA3wshxwbfH0H-qY`;

const JWT_SECRET = process.env.JWT_SECRET || validToken;

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