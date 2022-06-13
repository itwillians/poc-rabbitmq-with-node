# Envio de mensagens RabbitMQ utilizando com NodeJs

## 1. Objetivo

Iremos escrever dois pequenos programas em nodejs.

Um produtor que envia uma única mensagem e um consumidor que recebe mensagens e as imprime. Chamaremos nosso editor de mensagens (remetente) de publisher.js e nosso consumidor de mensagens (receptor) de subscriber.js. 

O editor se conectará ao RabbitMQ, enviará uma única mensagem e desconectar.


## 2. Pré-requisitos

- [Node LTS](https://nodejs.org/pt-br/)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [VSCode](https://code.visualstudio.com/download)
- [RabbitMQ](https://www.rabbitmq.com/download.html)


## 3. Preparando ambiente

Após baixar o projeto e instalar os requisitos:

Acessar rabbitmq-with-node 

`npm install`


## 4. Executando script de publicação de mensagem

`node publisher.js`


## 5. Executando script de consumo de mensagem

`node subscriber.js`
