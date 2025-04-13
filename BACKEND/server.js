const dotenv= require('dotenv')
dotenv.config();
const http = require('http')
const app=require('./app')

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, (req,res)=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);
    
})