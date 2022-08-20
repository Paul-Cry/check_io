const socket = require('socket.io-client')('http://localhost:3002/')

socket.on('update_data', (match)=>{
    console.log('Пришел обновленный матч 1 клиенту')
})

console.log('send')
socket.emit('send')


