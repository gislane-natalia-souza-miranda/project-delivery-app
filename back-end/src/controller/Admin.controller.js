const service = require('../service/Admin.service');

const getAll = async (_req, res) => {
  const users = await service.getAll();
  res.status(200).json(users);
};

const deleteByID = async (req, res) => {
  await service.deleteByID(req.params.id);
  res.status(200).end();
};

module.exports = { getAll, deleteByID };