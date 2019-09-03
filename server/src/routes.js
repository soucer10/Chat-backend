const express=require('express')
const UsersController=require('./controllers/UsersController')

const routes=express.Router()

routes.post('/cadastrar',UsersController.cadastrar)
routes.post('/atualizar',UsersController.atualizar)
routes.post('/deletar',UsersController.deletar)
routes.post('/login',UsersController.login)



module.exports=routes