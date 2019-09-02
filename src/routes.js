const express=require('express')

const routes=express.Router()

routes.get('/',(req,res)=>{
    res.send(`Meu nome é Hugo`)
})


module.exports=routes