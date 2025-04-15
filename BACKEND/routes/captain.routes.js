const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post('/register', [
    body('fullname.firstname').notEmpty().withMessage('First name is required').isLength({min: 3}).withMessage('First name should be at least 3 characters long'),
    body('fullname.lastname').notEmpty().withMessage('Last name is required').isLength({min: 3}).withMessage('Last name should be at least 3 characters long'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required').isLength({min: 6}).withMessage('Password should be at least 6 characters long'),
    body('vehicle.color').notEmpty().withMessage('Color is required').isLength({min: 3}).withMessage('Color should be at least 3 characters long'),
    body('vehicle.plate').notEmpty().withMessage('Plate is required').isLength({min: 3}).withMessage('Plate should be at least 3 characters long'),
    body('vehicle.capacity').notEmpty().withMessage('Capacity is required').isNumeric().withMessage('Capacity should be a number').isInt({min: 1}).withMessage('Capacity should be at least 1'),
    body('vehicle.type').notEmpty().withMessage('Type is required').isIn(['Car', 'Bike', 'Auto']).withMessage('Type should be either Car, Bike or Auto'),
], 
              captainController.registerCaptain
);

module.exports = router;