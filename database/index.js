const mongoose = require('mongoose')
// This method is traditionally fast in response.
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("Connection Open!!")
    }).catch(err => {
        console.log("Connection Unavailable")
        console.log(err)
    })
// The above part is necessary to connect the mongoDB with the ODM(Mongoose)
// ODM is Object Document Mapper, it's available for JavaScript as an ODM library.
// There are similar one's if SQL is used, like ORM(Object Relational Mapper).
// In ODM , collections are classes, documents are objects. 
// In simple words, this mapper will let us do things on mongoDB without going and manually testing out in mongo shell.
// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error'))// Event listener that takes(event,callback) and always throws this whenever the event is occurred.
// db.once('open', function () {//Event listener that happens only once (event, callback), So whenever the db is opened at least once, this will pop-up.
//     console.log("CONNECTION OPEN")
// })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)
const lagaan = new Movie({ title: "Lagaan", year: 2002, score: 8.4, rating: 'U' })

// insertMany in mongoose works a bit differently, as it returns a promise, also we're working on the model.
Movie.insertMany([
    { title: "3 Idiots", year: 2009, score: 8.4, rating: "U" },
    { title: "Dangal", year: 2016, score: 8.3, rating: "U" },
    { title: "Bahubali: The Beginning", year: 2015, score: 8.1, rating: "A" },
    { title: "Sholay", year: 1975, score: 8.2, rating: "A" },
    { title: "Eega", year: 2012, score: 7.7, rating: "U" },
]).then(data => {
    console.log("IT WORKED")
    console.log(data)
})