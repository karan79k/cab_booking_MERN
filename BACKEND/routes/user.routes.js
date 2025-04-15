const express=require('express')
const router = express.Router();
const userController=require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')


const { body } = require('express-validator');

//user register
router.post('/register',[
    body('email').trim().isEmail().withMessage('Invalid Email'),
    body('password').trim().isLength({min:6}).withMessage('password must be at least 6 character'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be at leat 3 char')]
    ,
    userController.registerUser
)
//login user 

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength().withMessage('password must be at least 6 character')
],
    userController.loginUser

)

//profile
router.get('/profile', authMiddleware.authUser,userController.getUserProfile)

//logout
router.get('/logout',authMiddleware.authUser,userController.logoutUser)

module.exports=router;