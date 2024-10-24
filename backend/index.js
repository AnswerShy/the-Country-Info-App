import express from 'express'
import router from "./router/router.js"
import cors from "cors"

const app = express();
app.use(express.json())

app.use(cors())

app.use('/api', router)

app.listen(3000, () => {
    console.log("https://localhost:3000")
})