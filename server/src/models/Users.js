const mongoose=require('mongoose')
const { Schema, model} =mongoose

const user=new Schema({

    user:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    pass:{
        type:String,
        required:true,
    },
    bio:String,
    connect:Boolean,
    
},{timestamps:true,})

module.exports=model('Users',user)

as