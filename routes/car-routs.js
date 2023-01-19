express = require('express')

const Car = require('../models/car')


const router = express.Router()

//INDEX
//GET /cars
router.get('/cars', (req, res, next) => {
    Car.find()
        .then(cars => {
            return cars.map(car => car)
        })
        .then(cars => {
            res.status(200).json({ cars: cars})
        })
        .catch(next)
})

// SHOW
// GET /cars/:id
router.get('/cars/:id', (req, res, next) => {
    Car.findById(req.params.id)
        .then(car => {
            res.status(200).json({ car: car})
        })
        .catch(next)
})



// CREATE
// POST /cars
router.post('/cars', (req, res, next) =>{
    Car.create(req.body.car)
        .then(car => {
            res.status(201).json({ car: car})
        })
        .catch(next)
})

module.exports = router