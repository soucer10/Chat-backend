const {Router}=require('express')
const Users=require('../models/Users')
const bcrypt=require('bcrypt')

module.exports={

  async cadastrar(req,res){
        const {user,email,pass,bio}=req.body

        Users.create({
            user,
            email,
            pass:bcrypt.hashSync(pass),
            bio
        })
    },
  async atualizar(req,res){
        
    },
  async deletar(req,res){
         const {email}=req.body
         Users.deleteOne({email})
    },
   async login(req,res){
        const {email,pass}=req.body
    }
}