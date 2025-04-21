const userModel=require('../models/user.model')
const { validationResult } = require('express-validator');
const userService = require('../services/user.service')
const blacklistTokenmodel = require('../models/blacklistToken.model')

module.exports.registerUser = async (req,res,next)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }
    console.log(req.body);

    const {fullname,email,password}=req.body;
    const isUserAlready = await userModel.findOne({email});
    if(isUserAlready){
        return res.status(400).json({message:'User already exists'})
    }

    const hashedPassword= await userModel.hashPassword(password)
    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
    })

    const token = user.generateAuthToken();
    res.status(201).json({token,user});
}

module.exports.loginUser = async (req,res,next)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }
    
    const {email,password}= req.body;
    const user = await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({message: 'Invalid email or password'});
    }
    
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message: 'Invalid email or password'});
    }
    
    const token = user.generateAuthToken();
    res.cookie('token',token);
    res.status(201).json({token,user});
    
}

module.exports.getUserProfile = async (req,res,next)=>{
    res.status(200).json(req.user)
}

module.exports.logoutUser = async (req, res, next) => {
    try {
        // Get token from authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const token = authHeader.split(' ')[1];
        
        // Blacklist the token
        await blacklistTokenmodel.create({ token });
        
        // Clear cookie if it exists
        res.clearCookie('token');
        
        res.status(200).json({ message: 'Logged Out' });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ message: 'Logout failed' });
    }
}