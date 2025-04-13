const mongoose= require('mongoose')

function connectToDB(){
//, {useNewUrlParser:true, useUnifiedTopology:true}
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('connected to db');
        
    }).catch((err)=>{console.log('error',err);
    })
}

module.exports= connectToDB;