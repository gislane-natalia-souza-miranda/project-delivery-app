const { User } = require('../database/models');

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const deleteByID = async (id) => { await User.destroy({ where: { id } }); };

module.exports = { getAll, deleteByID };