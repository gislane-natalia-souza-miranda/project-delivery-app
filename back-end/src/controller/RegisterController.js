const Sequelize = require('sequelize');
const register = require('../service/RegisterService');
const { User } = require('../database/models');

async function signUp(req, res, next) {
  const { name, email } = req.body;

  const testUser = await User.findOne({
    where: Sequelize.or(
      { name },
      { email },
    ),
  });

  if (testUser) return res.status(409).end();

  try {
    const insertedUser = await register.signUp(req.body);

    return res.status(201).json(insertedUser);
  } catch (error) {
    next(error);
  }
}

module.exports = { signUp };