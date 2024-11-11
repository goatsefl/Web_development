const express = require('express')
const app = express();
const path = require('path')// This gives the path of the current file.
app.listen(3000, () => {
    console.log("Listening in PORT 3000")
})
// Takes in predefined values of configuration of app.set(name,value) or custom name & values.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))// This makes sure this file can be run globally without any errors.
app.get('/', (req, res) => {
    res.render('home.ejs');//res.render() is used to render templates as html. The file is processed through a templating engine.
    // In our case it's ejs(Embedded JavaScript)
    // It's optional to use the extension of any file.
})