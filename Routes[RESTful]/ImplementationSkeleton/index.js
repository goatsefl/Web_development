const express = require('express');
const app = express();
const path = require('path')
const { v4: uuidv4 } = require('uuid');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true })) // This functionality is to encode the data from a form when you send it as post method.
// After the form data is retrieved, it sends the data into req.body on line 18, and store it as an object.
// There are going to be different ways that POST request can use data.
app.use(express.json());
// You can send JSON data to the same POST request and it will reflect on req.body.
app.get('/tacos', (req, res) => {
    res.send("GET/ tacos response")
})
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body; // is an object which contains the values sent via POST request.
    res.send(`Order for ${qty} ${meat} tacos`)
})
app.listen(3000, () => {
    console.log("ON PORT 3000")
})




// ENTIRE IMPLEMENTATION OF COMMENTS 

const comments = [
    {
        id: uuidv4(),
        name: "Sophia",
        comment: "I love how smooth this process is"
    },
    {
        id: uuidv4(),
        name: "Aarav",
        comment: `Can't believe I missed this feature, it's so helpful!`
    },
    {
        id: uuidv4(),
        name: "Emily",
        comment: "This really made my day easier!"
    },
    {
        id: uuidv4(),
        name: "Liam",
        comment: "Such a great way to improve efficiency"
    },
    {
        id: uuidv4(),
        name: "Ananya",
        comment: 'I was wondering how to do this, thanks for the tip!'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    res.send("This works")
    console.log(req.body)
    const { name, comment } = req.body;
    console.log(name, comment)
    comments.push({ id: uuidv4(), name, comment })
})