const express = require('express')
const router = express.Router();

const userController = require('../controllers/user')

router.post("/UserLogin", userController.Login)

module.exports = router