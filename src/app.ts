import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(cors())


app.use('/api/v1',routes)


app.get('/', (req, res)=> {
    res.send(`<h1>LabLog server is running...</h1>`)
})

export default app