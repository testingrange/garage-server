const mongoose = require('mongoose')

const Schema = mongoose.Schema
const currenYear = 2023

// schema
const carSchema = new Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: currenYear,
    }
}, 
{
    timestamps: true
})

// model
// mongos collection cars
const Car = mongoose.model('Car', carSchema)

module.exports = Car