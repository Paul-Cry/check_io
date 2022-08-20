const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer)

io.on('connection', onConnection)


let clients = []
function Hunter(target){
    clients.push(target)
    if(clients[1]){
        console.log('Клиент 2 есть')
        clients[1].emit('update_data')
    }else{
        console.log('Клиента 1 нету')
    }
    // console.log(target)
}

function onConnection(socket){
    console.log('New connection')
    //console.log(socket)
    // Hunter(socket)

    socket.on('send', ()=>{
        console.log('Функция сработала вне io')
    })
}




httpServer.listen(3002, ()=>{

    console.log('Server is ready on 3002')
})