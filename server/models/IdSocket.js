const mongoose=require('mongoose')
const { Schema, Model} =mongoose

const IdSocket=new Schema({

    user:{
        type:String,
        required:true,
    },
    socketid:{
        type:String,
        required:true,        
    },
    timestamp:{
        timestamp:true,
        default:Date.now
    }

})


module.exports=Model('IdSockets',IdSocket)