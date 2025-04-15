const dotenv= require('dotenv')
dotenv.config();
const express = require('express')
const app= express();
const connectToDB=require('./db/db')
const userRoutes= require('./routes/user.routes')
const captainRoutes= require('./routes/captain.routes')
const cookieParser= require('cookie-parser')
connectToDB();
const cors=require('cors')

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('hey')
})

app.use('/users',userRoutes)
app.use('/captains',captainRoutes)

module.exports=app;