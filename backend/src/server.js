import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import numberRoutes from './routes/number.routes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/numbers', numberRoutes)

app.get('/', (req, res) => {
  res.json({ status: 'Recycle Intel API Online' })
})

app.listen(process.env.PORT, () => {
  console.log(`♻️ API rodando na porta ${process.env.PORT}`)
})
