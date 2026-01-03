import express from 'express'
import cors from 'cors'
import userRouter from './modules/user/user.route'

const app = express()

app.use(express.json())
app.use(cors())


app.use(userRouter)


app.get('/', (req, res)=> {
    res.send(`<h1>LabLog server is running...</h1>`)
})

export default app