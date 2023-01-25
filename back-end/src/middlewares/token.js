const jwt = require('jsonwebtoken');

function createToken(userBody) {
  const token = jwt.sign(
    userBody,
    'secret_key',
    { algorithm: 'HS256' },
  );

  return token;
}

function verifyToken(req, res, next) {
  const { authorization } = req.headers;
  console.log(authorization);

  try {
    jwt.verify(authorization, 'secret_key');
    next();
  } catch(err) {
    res.status(404).json({ message: err.message });
  }
}

module.exports = {createToken, verifyToken};
