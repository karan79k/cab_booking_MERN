const userModel=require('../models/user.model')
const captainModel=require('../models/captain.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const blacklistTokenModel = require('../models/blacklistToken.model')

module.exports.authUser =async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }
    const isBlackListed = await blacklistTokenModel.findOne({token:token});
    if(isBlackListed){
        return res.status(401).json({message:'Unauthorized'});
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user= await userModel.findById(decode._id);

        req.user = user;
        return next();
    }catch(err){
        return res.status(401).json({message:'Unauthorized'});
    }
    

}
module.exports.authCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const isBlackListed = await blacklistTokenModel.findOne({ token });
        if (isBlackListed) {
            return res.status(401).json({ message: 'Token has been invalidated' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        
        if (!captain) {
            return res.status(401).json({ message: 'Captain not found' });
        }

        req.captain = captain;
        req.token = token;  // Store token for logout
        next();
    } catch (err) {
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired' });
        }
        return res.status(500).json({ message: 'Authentication failed' });
    }
}