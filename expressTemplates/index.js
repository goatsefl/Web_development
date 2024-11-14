const express = require('express')
const app = express();
const path = require('path')// This gives the path of the current file.
const redditData = require('./data.json')
// app.set('public', path.join(__dirname, 'public'))
// Takes in predefined values of configuration of app.set(name,value) or custom name & values.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))// This makes sure this file can be run globally without any errors.
app.get('/', (req, res) => {
    res.render('home');//res.render() is used to render templates as html. The file is processed through a templating engine.
    // In our case it's ejs(Embedded JavaScript)
    // It's optional to use the extension of any file.
})
app.use(express.static(path.join(__dirname, 'public')))
// express.static('public') serves static files to be accessed from given(In our case "public") directory, where we can use css,img or js files for the needed project.  
app.get('/cats', (req, res) => {
    const cats = ['bill', 'burma', 'baker', 'blake', 'blushy']
    res.render('cats', { cats })
})
app.get('/random', (req, res) => {
    const random = Math.floor(Math.random() * 10) + 1;
    const result = random % 2 === 0 ? "AN EVEN NUMBER" : "AN ODD NUMBER";
    res.render('random', { random, result }); // render(fileName,object)
})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data })
    }
    else {
        res.render('invalid', { subreddit })
    }
})
// All of this, is to maintain consistency over new pages, as every new page cannot have a new design
// Eg: Google, google search has a lot of pages for one search, by going to the second page.
// The provided second page will follow the same template of first page, and n pages to go forward with. 

// In simple words, templating is necessary when the website has a lot of elements.
app.listen(3000, () => {
    console.log("Listening in PORT 3000")
})
