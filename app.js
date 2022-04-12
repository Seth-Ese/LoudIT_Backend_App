const express = require('express')
const app = express()
require('dotenv').config()
const dbConnect = require('./Configs/db')

app.use(express.urlencoded({ extended: true }))


dbConnect()


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running at .... ${PORT}`)
})

