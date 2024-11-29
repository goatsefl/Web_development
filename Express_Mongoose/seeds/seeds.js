const mongoose = require('mongoose')
const Product = require('../models/product')
mongoose.connect('mongodb://localhost:27017/newApp').
    then(() => {
        console.log("Connection is Working on Mongo")
    }).
    catch(e => {
        console.log("OOPS Connection issue")
        console.log(e)
    })

const p = new Product({
    name: "Grape Fruit",
    price: 1.99,
    category: 'fruit'
})
// p.save().then(p => console.log(p))

const seedProducts = [{}, {}, {}, {}, {}, {}]

Product.insertMany()