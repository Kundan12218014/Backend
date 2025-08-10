
const express = require('express');
const storeRouter = express.Router();

const storeController =require('../controllers/storeController');
storeRouter.get('/', storeController.userUI);
storeRouter.get('/home-list', storeController.homeList);
storeRouter.get('/favourite-list',storeController.getFavourite);
storeRouter.get('/bookings',storeController.getBooking);

module.exports = storeRouter;