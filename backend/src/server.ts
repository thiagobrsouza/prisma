import cors from 'cors'
import express from 'express'

const app = express()

app.use(express.json())

app.use(cors())

const port = 3001
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})