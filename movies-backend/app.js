import express from 'express'
import cors from "cors"
import { getMovies } from './controllers/moviesC.js'


const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

app.get('/movies', getMovies)

app.listen(port, () => {
    console.log({message:`server runing on http://localhost:${port}`});
})