const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/shopApp') // This is the way to use mongoose after using require('mongoose')
    .then(() => {
        console.log("Connection Open!!")
    }).catch(err => {
        console.log("Connection Unavailable")
        console.log(err)
    })
// While using Model.findOneAndUpdate({query},{updated_property},{new=true,runValidators:true})
// When we use runValidator = true, it will look for schema rules and validate whether the updated values follow the schematic.
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [30, 'Is that product, a lore']
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        enum: ['XS', 'S', 'M', 'L', 'XL']
    }
})
// Remember to create instance methods right after a schema has been created.
// This is to prevent TypeError, as after you create a new model's instance,
// The model won't have the schema because it was created after a new model instance was created
productSchema.methods.greet = function () {
    console.log("Hello!!! Server")
    console.log(`Price of ${this.name} is ${this.price}`)
}
// Virtuals are used to create a property, you can use it by get, and change it by set.

productSchema.virtual('MRP').get(function () {
    return this.price
}).set(price => {
    this.price += this.price * price
})
productSchema.pre('save', async () => console.log("Before Save")) // Providing middleware to control what happens after certain action, we can use multiple pre and post on schema.
productSchema.post('save', async () => { setTimeout(() => console.log("After 2 seconds"), 2000) })

// Static is used on the model instead of the instance, so we can make sure to make changes to the entire product stack.
productSchema.statics.freeProducts = async function () {
    await this.updateMany({}, { onSale: true, price: 35 })
    await this.find({})  // Making all our products 0 priced and visible
}

const Product = mongoose.model('Product', productSchema)// To access this in mongo shell, The model will be named  in plural way by mongoDB.
// To access this, use db.products.[MongoDBProduct]
const foundIT = async function () {
    const found = await Product.findOne({ name: "Mountain Bike Helmet" })
    found.greet()
}
const bike = new Product({ name: "Bike", price: 650 })
// bike.save().then(data => console.log("Worked Bikes", data)).catch(err => console.log(err))

const helmets = new Product({ name: "Helmets", price: 25, onSale: true })
// helmets.save().then(data => console.log("Worked Helmets")).catch(err => console.log(err))

const subProducts = [
    {
        name: "",
        price: 89.99,
        onSale: true
    },
    {
        name: "Cycling Gloves",
        price: 29.49,
        onSale: true
    },
    {
        name: "Bike Tire Pump",
        price: 54.75,
        onSale: true
    },
    {
        name: "LED Bike Lights",
        price: 35.99,
        onSale: false
    },
    {
        name: "Waterproof Saddle Bag",
        price: 22.89,
        onSale: false
    }
]
// Product.insertMany(subProducts)
//     .then(res => console.log(res)).catch(e => console.log(e))


// // Define all methods at once
// const instanceMethods = {
//     greet() {
//         console.log(`This product is ${this.name} = ${this.price}`);
//     },
// };

// // Add them to the schema
// Object.assign(productSchema.methods, instanceMethods);

bike.greet();
// const productIsThere = async () => {
//     const found = await Product.findOne({ name: 'LED Bike Lights' }) // findOne returns a Mongoose document.

// }
// productIsThere();

foundIT()
Product.freeProducts();
console.log(bike.MRP)
const guitar = new Product({ name: "Electric Guitar", price: 500 })
// guitar.save().then(c => console.log(c))