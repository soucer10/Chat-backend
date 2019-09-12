const express=require('express')
const UsersController=require('./controllers/UsersController')

const routes=express.Router()

routes.post('/cadastrar',UsersController.cadastrar)
routes.post('/atualizar',UsersController.atualizar)
routes.post('/deletar',UsersController.deletar)
routes.post('/login',UsersController.login)
routes.get("/",(req,res)=>{
    return res.send("A minha magrelinha é linda")
})


module.exports=routes