import { Router } from 'express'
import {StatusCodes} from 'http-status-codes'
const router = Router()



router.get('/', (_, resposta)=> {
    return resposta.send('Olá Mundo!')
})

router.post('/teste', (_, resposta)=> {
    console.log(_.body)
    return resposta.status(StatusCodes.FORBIDDEN).send('rota teste!')
})


export {router}