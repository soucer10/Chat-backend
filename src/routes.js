const express=require('express')
const UsersController=require('./controllers/UsersController')

const routes=express.Router()

routes.post('/cadastrar',UsersController.cadastrar)
routes.post('/atualizar',UsersController.atualizar)
routes.post('/deletar',UsersController.deletar)
routes.post('/login',UsersController.login)
routes.get("/:name",(req,res)=>{
    return res.send(`<h1>Olá ${req.params.name}, com você está?</h1>`);

})
module.exports=routes