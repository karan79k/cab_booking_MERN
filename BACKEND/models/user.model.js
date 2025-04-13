const mongoose=require('mongoose')
const bcrypt = require('bcrypt')//for hashing
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            require:true,
            minlength:[3,'First name must be at least 3 characters'],
        },
        lastname:{
            type:String,
            minlength:[3,'last name must be at least 3 characters'],
        }
    },
    email:{
        type:String,
        require:true,
        minlength:[13,'email must be at least 13 characters'],
    },
    password:{
        required:true,
        type:String,
        select:false
    },
    socketId:{
        type:String,//for tracking real time of captain
    }
})

//for generating token for regiistration
userSchema.methods.generateAuthToken=function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token
}

//for password comparision 
userSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password,this.password)
}

//for hashing the password at the time of registration
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10)
    
}

const userModel = mongoose.model('userData',userSchema)

module.exports=userModel;