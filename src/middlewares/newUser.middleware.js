const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  } 
  next();
};

const validateEmailFormat = (req, res, next) => {
  const { email } = req.body;
  if (!email.includes('@')) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const validatePasslength = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = {
  validateDisplayName,
  validateEmailFormat,
  validatePasslength,
};