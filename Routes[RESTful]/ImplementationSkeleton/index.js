const express = require('express');
const app = express();
const path = require('path')
const { v4: uuid } = require('uuid');

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
        id: uuid(),
        name: "Sophia",
        comment: "I love how smooth this process is"
    },
    {
        id: uuid(),
        name: "Aarav",
        comment: `Can't believe I missed this feature, it's so helpful!`
    },
    {
        id: uuid(),
        name: "Emily",
        comment: "This really made my day easier!"
    },
    {
        id: uuid(),
        name: "Liam",
        comment: "Such a great way to improve efficiency"
    },
    {
        id: uuid(),
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

// You cannot set headers after it's send to the client.
// The above statement means that you cannot do this :
/*  As it only does the send once.
{res.send()}
{res.redirect()}
*/
app.post('/comments', (req, res) => {
    const { name, comment } = req.body;
    const id = uuid();
    comments.push({ id, name, comment })
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    console.log(typeof id)
    const comment = comments.find(c => c.id == id);
    if (comment) {
        res.render('comments/show', { comment })
    }
    else {
        res.render('comments/invalidID', { id })
    }
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    console.log(id)
    for (let comment of comments) {
        if (comment.id == id) {
            res.render('comments/edit', { comment })
        }
    }
    res.render('comments/invalidID', { id })
})

app.post('/comments/:id', (req, res) => {
    const { editComment } = req.body;
    const { id } = req.params;
    const isExist = comments.find(c => c.id == id);
    if (isExist) {
        for (let comment of comments) {
            if (comment.id == id) {
                comment.comment = editComment;
                res.redirect('/comments');
            }
        }
    }
})