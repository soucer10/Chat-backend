const {Router}=require('express')
const Users=require('../models/Users')

module.exports={

    cadastrar(req,res){
        res.json({status:'oK'})
    },
    atualizar(req,res){

    },
    deletar(req,res){

    },
    login(req,res){
        const {email,pass}=req.body
    }
}