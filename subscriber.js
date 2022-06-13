const amqp = require('amqplib/callback_api');

// Passo 1: criar conexão
amqp.connect('amqp://localhost', (connError, connection) => {
    if (connError) {
        throw connError;
    }
    
// Passo 2: criar canal
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
// Passo 3: assertiva na fila
        const QUEUE = 'FilaTesteParaQA'
        channel.assertQueue(QUEUE);

// Passo 4: recebimento das mensagens
        channel.consume(QUEUE, (msg) => {
            console.log(`Message received: ${msg.content.toString()}`)
        }, {
            noAck: true
        })
    })
})