const socket = require('socket.io-client')('http://localhost:3002/')


socket.on('update_data', (match)=>{
    console.log('Пришел обновленный матч 2 клиенту')
})