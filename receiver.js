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
        // Step 3: Assert Queue
        const QUEUE = 'FilaQueRecebe'
        channel.assertQueue(QUEUE);
        // Step 4: Receive Messages
        
        channel.consume(QUEUE, (msg) => {
            console.log(`Message received: ${msg.content.toString()}`)
        }, {
            noAck: true
        })
    })
})