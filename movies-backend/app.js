import express from 'express'
import cors from "cors"


const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

app.get('/movies', ()=>{})

app.listen(port, () => {
    console.log({message:`server runing on http://localhost:${port}`});
})