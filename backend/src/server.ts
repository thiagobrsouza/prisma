import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'

const app = express()

app.use(express.json())

app.use(cors())

app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
      return res.status(400).json({
          error: err.message
      })
  }
  return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error!'
  })
})

const port = 3001
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})