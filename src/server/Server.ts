import express from 'express'

const server = express()

server.get('/', (requisicao, resposta)=> {
    return resposta.send('Olá Mundo!')
})


export { server }