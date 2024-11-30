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

const seedProducts = [{ name: 'Onion', price: 1.99, category: 'vegetable' },
{ name: 'Potato', price: 2.99, category: 'vegetable' }, { name: 'Cheese', price: 4.99, category: 'dairy' }, { name: 'Strawberry', price: 9.99, category: 'fruit' }, { name: 'Garlic', price: 7.99, category: 'vegetable' }, { name: 'Mango', price: 16.99, category: 'fruit' }
]
// insertMany will decline every insertion if the schema is not followed by any individual object.
Product.insertMany(seedProducts).then(s => console.log(s)).catch(e => console.log(e))
