
const express = require('express');
const userRouter = express.Router();

const userController =require('../controllers/user');
userRouter.get('/', userController.userUI);

module.exports = userRouter;