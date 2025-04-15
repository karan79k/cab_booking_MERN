const captainModel = require('../models/captain.model');
const {validationResult} = require('express-validator');
const captainService = require('../services/captain.service');
module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password, vehicle} = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({email});
    if (isCaptainAlreadyExist) {
        return res.status(400).json({message: 'Captain already exists'});
    }
    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstName: fullname.firstname,
        lastName: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        type: vehicle.type,
    });

    const token = await captain.generateAuthToken();
    res.status(201).json({  token, captain });

}