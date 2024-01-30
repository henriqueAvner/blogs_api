const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  return next();
};

module.exports = {
  validateToken,
};