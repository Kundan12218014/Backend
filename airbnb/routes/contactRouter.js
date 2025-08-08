
const express=require('express');
const contactRouter=express.Router();

const contactController=require('../controllers/contact');

contactRouter.get('/contact-us', contactController.contactUsPage);
contactRouter.post('/contact-us',contactController.contactResponse);

module.exports=contactRouter;