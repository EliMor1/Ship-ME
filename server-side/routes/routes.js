const express = require('express');
const router = express.Router();
const authModel = require('../models/signUpModels');
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyjwt');
const userModel = require('../models/userModel');
const companyModel = require('../models/companyModel');

// super admin companies management routes

// display all collections of existing companies
router.get('/getcomps',async function (req,res){
    const companies = await companyModel.find({});
    try{
        res.send(companies);
    }catch(err){
        res.send(err);
    }
});     

// add a new company to the companies collections (Super admin only)
router.post('/newcomp', async function(req,res){

    const newCompany = await new companyModel({
        companyManager:"",
        companyName:req.body.companyName,
        companyAddress:req.body.companyAddress,
        city:req.body.companyCity,
        state:req.body.companyState,
        zipCode:req.body.companyZipCode,
        companyPhone:req.body.companyPhone,
        companyEmail:req.body.companyEmail,
        companyWebsite:req.body.companyWebsite,
        primaryContactName:req.body.primaryContactName,
        primaryContactPhone:req.body.primaryContactPhone,
        primaryContactJobTitle:req.body.primaryContactJobTitle,

    });
    newCompany.save()
    try{
        res.send(newCompany);
    }
    catch(error){
        res.send(error);
    }
})

// delete a chosen company from the companies collections (Super admin only)
router.post('/delete', async function(req,res){
    try{
        const deletedComp = await companyModel.findOneAndDelete({companyName:req.body.companyName});
        console.log('deleted');
        res.send(deletedComp);
    }catch(err){
        res.send(err);
    }
    
  
})



module.exports = router;