// // The original way of sending requests via JavaScript.

// // Does not support promises.

// // Usage of XmlHttpRequest object :

// const dataXML = new XMLHttpRequest();

// dataXML.onload = function () {
//     const stringed = JSON.parse(this.responseText);
//     console.log("Perfectly Done!!");
//     console.log(stringed.name); // we parsed the JSON file to JS object and we can get all the key:value pairs of the data mentioned.
// }

// dataXML.onerror = function () {
//     console.log("The Troopers have won, error life is sad :(");
//     console.log(this);
// }

// dataXML.open("GET", "https://swapi.dev/api/people/2") // This line ask for the verb as the first argument,and the link for that action.
// dataXML.send();// Sends the data, we need 

// This syntax is pretty outdated, as it does not support promises or async functions, if we want to make subsequent requests,we need to nest, which makes it difficult to use this way to get API's.

// Instead of this, we can use Fetch API, promises are supported, unfortunately, IE is not supported.1


// Fetch with promises.
// Also, fetch contains get request by default without the usage of GET.
// When we use only res, it will provide the object, but, the body will be Readable Stream.
// To convert that Readable stream into JS verifiable object, we use .json on resolve(res).

// Which converts the body of the data from "https://swapi.dev/api/people/3" into an object. 

// fetch("https://swapi.dev/api/people/3").then((res) => {
//     console.log(res);
//     return res.json();// Creates a promise and returns the json file by using ".json()" method.
// }).then((res) => {
//     console.log(res); // Returns a res.json() object from the previous .then().
//     // Here the data of r2d2 is present.
// }).catch(error => console.log("This error's data is here", error));


// Again, promises can have issues with repetitive usage of then(), creates unnecessary boiler plate code.

// Using Async to fix this


const newReq = async () => {
    try {
        const reqData = await fetch("https://swapi.dev/api/people/4");
        const actualData = await reqData.json();
        console.log(actualData);
    }
    catch (e) {
        console.log("Error Detected!!!", e);
    }
}

newReq();

// Output :
// {
//"name": "Darth Vader",
//"height": "202",
//"mass": "136",
//"hair_color": "none",
//"skin_color": "white",
//"birth_year": "41.9BBY",
//"created": "2014-12-10T15:18:20.704000Z",
//"edited": "2014-12-20T21:17:50.313000Z",
//"eye_color": "yellow",
//"films": [
//"https://swapi.dev/api/films/1/",
//"https://swapi.dev/api/films/2/",
//"https://swapi.dev/api/films/3/",
//"https://swapi.dev/api/films/6/"
//],
// "gender": "male",
// "homeworld": "https://swapi.dev/api/planets/1/",
// "species": [],
// "starships": [
//     "https://swapi.dev/api/starships/13/"
// ],
//  "vehicles": [],
//      "url": "https://swapi.dev/api/people/4/"
// }




// Axios overcomes the issue with fetch, as we have to parse .json() separately using another promise.
// Axios, behind the scenes uses the fetch(). It's a third party library, not a native ,method.
// We can install it by using many ways, but, we are using a script from official docs.
// Usage : Instead of using fetch, we use "axios.get("URL")".

// axios.get("https://swapi.dev/api/planets/1/")
//     .then((res) => {
//         console.log("Data is fetched !", res
//         );
//     })
//     .catch((e) => { console.log(e) })


const getPlanet = async (no) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/planets/${no}/`);
        console.log(res.data);
    }
    catch (e) {
        console.log(e);
    }
}
getPlanet(7); // change the number and keep testing if different planets exist, start from 1, IDK the number of planets, but, you can test it out by commenting other parts of the code.



// Instead of Using a hoppscotch with help of axios, we can send in headers to axios and then extract the api's data.

const newHeader = document.querySelector('h2');
const newApi = async () => {
    const axiosHeader = { headers: { Accept: 'application/json' } };// this line will directly select the Headers List Object and send in our key and value to use the api.
    const dadJoke = await axios.get("https://icanhazdadjoke.com/", axiosHeader);
    newHeader.textContent = dadJoke.data.joke;
}

const jButton = document.querySelector('button');
jButton.textContent = "NewDadJoke";

jButton.addEventListener('click', () => {
    newApi();
})


// Axios Parameters:
// url(string):

// The URL to which the GET request is made.
//     Example: "https://api.example.com/data"
// config(optional, object):

// An optional configuration object that allows you to customize the request.It can include various options like headers, query parameters, timeouts, etc.
// Common config options:
// params(object):
// An object containing query parameters to be sent with the request.
//     Example: { params: { id: 123, name: 'Alice' } } results in ? id = 123 & name=Alice being appended to the URL.
//         headers(object):
// Custom headers to be sent with the request.
//     Example: { headers: { Authorization: 'Bearer token' } }
// timeout(number):
// Specifies the number of milliseconds before the request times out.
//     Example: { timeout: 5000 } (5 seconds)
// responseType(string):
// Indicates the type of data that the server will respond with.Can be 'json', 'text', 'blob', 'arraybuffer', etc.
//     Example: { responseType: 'json' }
// auth(object):
// Basic authentication credentials.
//     Example: { auth: { username: 'username', password: 'password' } }
// paramsSerializer(function):
// A function to customize the way the params are serialized.
//     Example: { paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'brackets' }) }
// baseURL(string):
// A base URL that will be prepended to url unless url is an absolute URL.
//     Example: { baseURL: 'https://api.example.com' }