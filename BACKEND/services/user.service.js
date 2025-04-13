const userModel=require('../models/user.model')

module.exports.createUser=async ({firstname,lastname,email,password})=>{
    if(!firstname||!email||!password ){
      res.status(401).json({message:'all fields must be required'})
      }
      const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user;

    }

 