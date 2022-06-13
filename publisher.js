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
        
        
// Passo 4: enviar mensagem para a fila
        channel.sendToQueue(QUEUE, Buffer.from('Testes AMQP QA'));


// Passo 5: verifica no log
        console.log(`Message send ${QUEUE}`);

            setTimeout(()=>{
            connection.close();
        }, 1000)
    })
})