const mongoose=require('mongoose')
const { Schema, Model} =mongoose

const user=new Schema({

    user:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    bio:String,
    timestamp:{
        timestamp:true,
        default:Date.now
    }
})

module.exports=Model('Users',user)