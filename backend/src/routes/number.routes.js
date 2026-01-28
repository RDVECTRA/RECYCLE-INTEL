import { Router } from 'express'
import { analyzeNumber } from '../controllers/number.controller.js'

const router = Router()

router.post('/analyze', analyzeNumber)

export default router

