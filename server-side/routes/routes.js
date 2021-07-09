const express = require('express');
const router = express.Router();
const userModel = require('../models/signUpModels');
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyjwt');

router.post('/signup', async function(req,res){
    
    const schema ={
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }
    const {error} = Joi.validate(req.body, schema);
    if(error){
        return res.send(error.details[0].message);
    }
    
    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword);

    const signedUpUser = await new userModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:securePassword,
    })
    
    const token = jwt.sign({email:req.body.email}, process.env.TOKEN);
    signedUpUser.save()
    try{
        res.send(token);
    }
    catch(error){
        res.send(error);
    }
        // .then(data =>{
        //     res.json(data);
        // })
        // .catch(error =>{
        //     res.json(error);
        // });
});

router.post('/login', async function(req,res){
    
    const user = await userModel.findOne({email:req.body.email});
    if(!user){
        return res.send('invalid email adress.');
    }
    const passwordVerification = await bcrypt.compare(req.body.password, user.password);
    if(!passwordVerification){
        return res.send('invalid password.');
    }
    // if(req.body.password != user.password){
    //     return res.send('invalid password.');
    // }
    const token = jwt.sign({email:req.body.email},process.env.TOKEN);
    console.log("email and pass of user: ", user.email + " " + passwordVerification);
    try{
        res.send(token);
    }
    catch(error){
        res.send(error);
    }

});



module.exports = router;