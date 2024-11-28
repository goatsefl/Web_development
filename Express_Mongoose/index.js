const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const Product = require('./models/product')
mongoose.connect('mongodb://localhost:27017/newApp', { useNewUrlParser: true }).
    then(() => {
        console.log("Connection is Working on Mongo")
    }).
    catch(e => {
        console.log("OOPS Connection issue")
        console.log(e)
    })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log("Listening on PORT 3000!!")
})