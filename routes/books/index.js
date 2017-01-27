import { Router } from 'express'
import list from './list'

let router = Router()
router.get('/', list)

export default router
