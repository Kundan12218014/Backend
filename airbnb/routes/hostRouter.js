
const express=require('express');
const hostRouter=express.Router();

const hostController = require('../controllers/hostController');

hostRouter.get('/add-home', hostController.addGetHome);
hostRouter.post('/add-home', hostController.addPostHome);

module.exports = hostRouter;