const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
            minLength: [3,'First name should be at least 3 characters long'],
        },
        lastname:{
            type: String,
            required: true,
            minLength: [3,'Last name should be at least 3 characters long'],
        }
      
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
   socketId:{
    type:String,
   
   },
   status:{
    type:String,
    enum:['Active','inactive'],
    default:'inactive'
   },
   vehicle:{
    color:{
        type: String,
        required: true,
        minLength: [3,'Color should be at least 3 characters long'],
    },
    plate:{
        type: String,
        required: true,
        minLength: [3,'Plate should be at least 3 characters long'],
    },
    capacity:{
        type: Number,
        required: true,
        min: [1,'Capacity should be at least 1'],
    },
    type:{
        type: String,
        required: true,
        enum:['Car','Bike','auto'],
    },
    location:{
        lat:{
            type: Number,
           
        },
        long:{
            type: Number,
        }
    }
   }
});

captainSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: '24h',
    });
    return token;}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}



const captainModel = mongoose.model('captain', captainSchema);
module.exports = captainModel;