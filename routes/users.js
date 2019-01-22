const express = require("express");
const router = express.Router();

const UsersController = require('../controllers/UserControllers')

router.get('/', UsersController.getUsers);
router.get('/', UsersController.getUsers);

router.get('/:id', UsersController.getUsersById);

module.exports = router;