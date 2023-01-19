// controll panel
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const db = require('./config/db')
const PORT = 8001


const carRoutes = require('./routes/car-routs')

// strict query if it is not in the chema it will reject it
mongoose.set('strictQuery', true)


mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// starting an express app
const app = express()

// app.use(cors({ origin: 'http://127.0.0.1:5500'}))

// sending json
// need to be able to accept json
app.use(express.json())

app.use(carRoutes)

app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})

module.exports = app