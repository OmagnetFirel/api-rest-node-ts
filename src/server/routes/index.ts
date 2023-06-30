import { Router } from 'express'
import { FilmesController } from '../controllers'
const router = Router()



router.get('/', (_, resposta)=> {
    return resposta.send('Olá Mundo!')
})

router.post('/filme',FilmesController.create)


export {router}