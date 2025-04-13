const dotenv= require('dotenv')
dotenv.config();
const express = require('express')
const app= express();
const connectToDB=require('./db/db')
const userRoutes= require('./routes/user.routes')
connectToDB();
const cors=require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('hey')
})

app.use('/users',userRoutes)

module.exports=app;