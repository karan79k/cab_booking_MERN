const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstName,
    lastName,
    email,
    password,
    color,
    plate,
    capacity,
    type,
})=>{
    if(!firstName || !lastName || !email || !password || !color || !plate || !capacity || !type) {
        throw new Error('All fields are required');
    }const captain = captainModel.create({
        fullname:{
            firstname:firstName,
            lastname:lastName
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            type
        }
    });
    return captain;
}