const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const Routes=require('./routes')
const mongoose=require('mongoose')
const IdSocket=require('./models/IdSocket')
const Users=require('./models/Users')
require('dotenv/config')
const app=express()
const server=require('http').Server(app)
const io=require('socket.io')(server)


console.log(process.env.MONGO)

mongoose.connect(process.env.MONGO,{useNewUrlParser:true})

io.on('connect',async socket=>{
    const {email}=socket.handshake.query
    const id=await IdSocket.findOne({email})
    
    if(id){

        await IdSocket.updateOne({email},{socketid:socket.id})
        
    }else{

       await IdSocket.create({
            email,
            socketid:socket.id
        })
    }

})

app.use((req,res,next)=>{
    req.io=io
    return next()
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(Routes)

server.listen(process.env.PORT || 5000)