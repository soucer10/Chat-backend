const io=require('socket.io-client')

io.connect('http://localhost:3333',{
    query:{email:'hugobicudo@gmail.com'}
})

