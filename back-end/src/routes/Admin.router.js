const express = require('express');
const { getAll, deleteByID } = require('../controller/Admin.controller');

const router = express.Router();

router.get('/manage', getAll);
router.delete('/manage/:id', deleteByID);

module.exports = router;