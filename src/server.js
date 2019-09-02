const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const Routes=require('./routes')

const app=express()
const server=require('http').Server(app)
const io=require('socket.io')(server)

const socketUsers={}

io.on('connect',socket=>{
    const {user}=socket.handshake.query
    socketUsers[user]=socket.id
})

app.use((req,res,next)=>{
    req.io=io
    req.socketUsers=socketUsers
    return next()
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(Routes)

server.listen(3333)