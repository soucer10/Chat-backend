const Users=require('../models/Users')
const crypt=require('crypto')

module.exports={

  async cadastrar(req,res){
      const {user,email,pass,bio}=req.body

      const Tuser=await Users.findOne({email})
      
      if(!Tuser){
       await Users.create({
            user,
            email,
            pass:crypt.createHash('sha256').update(pass).digest('hex'),
            bio,
            connect:false
        })
        return res.json({message:"Usuario cadastrado com sucesso!"})
      }else{
        return res.json({message:"Usuario já está cadastrado"})
      }
    },
  async atualizar(req,res){
      const {email,bio,user}=req.body
      const Targetuser=await Users.findOne({email})
      
      if(!Targetuser){
        return res.json({message:"Usuario não está cadastrado"})
      }

      if(!Targetuser.connect){
        return res.json({message:"Usuario não está logado!"})
      }
      
      await Users.updateOne({email},{user:user||Targetuser.user,bio:bio||Targetuser.bio})
      return res.json({message:"Usuario atualizado com sucesso"})

    },
  async deletar(req,res){
      const {email}=req.body
      const user=await Users.findOne({email})

      if(!user){
        return res.json({message:"Usuario não está cadastrado"})
      }
      if(!user.connect){
        return res.json({message:"Usuario não está logado!"})
      }      

      await user.remove()
      return res.json({message:"Usuario deletado"})
    },
  async login(req,res){
      const {email,pass}=req.body

      const user=await Users.findOne({email})

      if(!user){
        return res.json({message:"Usuario não está cadastrado"})
      }
      if(!pass===user.pass){
        return res.json({message:"Senha errada!"})
      }
      await Users.updateOne({email},{connect:true})
      return res.json({message:"ok"})
    }
}