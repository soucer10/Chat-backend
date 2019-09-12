const mongoose=require('mongoose')
const { Schema, model} =mongoose

const IdSocket=new Schema({

    email:{
        type:String,
        required:true,
        unique:true,
    },
    socketid:{
        type:String,
        required:true,        
    },

},{timestamps:true,})


module.exports=model('IdSockets',IdSocket)