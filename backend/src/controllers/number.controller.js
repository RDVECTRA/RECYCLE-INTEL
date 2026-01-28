import { generateScore } from '../services/score.service.js'

export function analyzeNumber(req, res) {
  const { number } = req.body

  if (!number) {
    return res.status(400).json({ error: 'Número é obrigatório' })
  }

  const result = generateScore(number)
  res.json(result)
}
