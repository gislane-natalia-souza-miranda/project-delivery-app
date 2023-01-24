const RegisterService = require("../service/RegisterService");
const { User } = require('../database/models');
const Sequelize = require('sequelize');

class UserController {
  constructor() {
    this.service = new RegisterService();
  }

  signUp = async (req, res, next) => {
    const { name, email } = req.body;

    const testUser = await User.findOne({
      where: Sequelize.or(
          { name },
          { email }
      )
  });
  
    if (testUser) return res.status(409).end();

    try {
      const insertedUser = await this.service.signUp(req.body);
  
      return res.status(201).json(insertedUser);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;