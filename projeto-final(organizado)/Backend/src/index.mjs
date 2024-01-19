import 'dotenv/config'
import app from './App.js'
import './config/database.js'
import cors from 'cors'


app.use(cors())

const port = process.env.PORT || 5001

app.listen(port, () =>{
    console.log(`API ONLINE, server ${port}`)
})