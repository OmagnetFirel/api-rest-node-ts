import {Request, Response} from 'express'
import { MiddleWare } from '../../shared/middlewares'

export const create = async (req:Request, res:Response) => {
  const body = await MiddleWare.readBodyAsBuffer(req);
  res.send(body.toString())
  return res.send('Created')
}