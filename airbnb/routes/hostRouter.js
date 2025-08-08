
const express=require('express');
const hostRouter=express.Router();

const addHomeController = require('../controllers/addHome');

hostRouter.get('/add-home',addHomeController.addGetHome);
hostRouter.post('/add-home',addHomeController.addPostHome);
hostRouter.get('/homes',addHomeController.homeList);

module.exports = hostRouter;