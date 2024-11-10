const express = require('express');
const app = express();
// MOST OF THE INFORMATION GIVEN BELOW IS REGARDING ROUTING.

// ROUTING : TAKING INCOMING REQUESTS AND MATCHING THAT TO A PATH USING CODE.

// Middleware function(app.use()) : Can accept route handlers requests for all HTTP methods(GET,PUT,POST,DELETE etc.)
// They are used to specifically handle pre-processing request before handing it over to specific route handlers.
// This literally creates a new express server and listens for HTTP requests
// We can access this server in browser by going to localhost:3000 as our port is 3000
// In this example app.listen() is literally a local server only available to us.  
app.listen(8100, () => {
    console.log("Hi, this is the first express app :)")
})
// app.use() is a middleware function that handles incoming requests
// app.use((req, res) => {
//     console.log("Request Incoming");
//     // res.send("This is the first message");
//     res.send({ colors: 'red' });
//     // In the browser we can clearly see the message displayed by res.send() on the localhost:3000
// })

// NOTE : REQUESTS ARE SEQUENTIAL, IF app.get('*') IS USED, IT SHOULD BE KEPT AT THE END. AS IT NEEDS TO BE ORDERED SEQUENTIALLY. 
app.get('/cat', (req, res) => {
    res.send('<h1> MEOWWWW :* </h1')
})
app.get('/dog', (req, res) => {
    res.send('<h1> WOOF!!!</h1')
})
app.get('/', (req, res) => {
    res.send('<h1>Welcome to homepage</h1>')
})
// 
// app.get() define route handlers requests of HTTP method GET specifically from a path and uses req/res object like, app.use()
// but, with multiple app.get() you can make multiple send requests for each path or sub-path.
// whereas, app.use() is used for a single request processing. Useful for authentication/pre-processing before it reaches specific route handlers.

// We can use listen to have different servers, for different tasks.
// Initially, this is a basic underlying of how ports work.

// Automatically when we create app.use((req,res)=>{}) request and response are in the callback function by default.
// req and res are objects which holds many properties and methods to perform certain action. 
// to view these properties, we can use console.dir(res)


// PATH PARAMETERS :
// Used to make pattern to store required paths.

// EG: the ':' after the forward slash signifies the pattern, so whenever this pattern occurs
app.get('/r/:subreddit/:id', (req, res) => {
    console.log(req.params)// output :{ subreddit: 'fish', id: '123124124' }
    const { subreddit, id } = req.params // We can store parameters of url using req.params from the url
    res.send(`<h1>THIS IS A SUBREDDIT FOR ${subreddit} and the id is ${id}</h1>`)
})

// Query String : It's a portion of the URL which appears after '?' symbol. Which provides information like key:value pairs.
// It's a common practice to involve key:value pairs.

app.get('/search', (req, res) => {
    const { fruit, taste } = req.query;
    res.send(`The fruit is ${fruit} and it has a ${taste} taste`)
    // When you search for localhost:8100/search?fruit = apple&taste=sweet.
    // The above output :
    // THE fruit is apple and it has a sweet taste.
    // Generates output : { cat: 'meow' } on your server side.
    // res.send(`<h1>Search results for: ${q}</h1>`)    
})

app.get('*', (req, res) => {
    res.send(`This path is unavailable`);
})
