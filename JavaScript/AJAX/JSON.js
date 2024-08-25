// // The data that is sent through API which uses JSON files, It's a file, that we use to

// //  in JSON, the object's key are under quotation marks, you can pass in almost everything.
// // Most of the values are supposed to be in quotation marks except for null array values, and boolean values.
// // JSON is used extensively for most of the language as a data carrier.

// // The support is of wide range, and can be used in a heterogenous language structure.

// // JSON is called a data interchange language, alternatively XML is used to be the industry norm.

// // Example of a JSON Script :

// // {"fact":"A cat named Dusty, aged 1 7, living in Bonham, Texas, USA, gave birth to her 420th kitten on June 23, 1952.","length":107}

// // To convert the above script into a javascript readable object , we can do this :

// const data = `{
//     "time": {
//         "updated": "Aug 22, 2024 23:28:42 UTC",
//         "updatedISO": "2024-08-22T23:28:42+00:00",
//         "updateduk": "Aug 23, 2024 at 00:28 BST"
//     },
//     "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
//     "chartName": "Bitcoin",
//     "bpi": {
//         "USD": {
//             "code": "USD",
//             "symbol": "&#36;",
//             "rate": "60,447.491",
//             "description": "United States Dollar",
//             "rate_float": 60447.4905
//         },
//         "GBP": {
//             "code": "GBP",
//             "symbol": "&pound;",
//             "rate": "46,168.343",
//             "description": "British Pound Sterling",
//             "rate_float": 46168.3425
//         },
//         "EUR": {
//             "code": "EUR",
//             "symbol": "&euro;",
//             "rate": "54,390.289",
//             "description": "Euro",
//             "rate_float": 54390.2893
//         }
//     }
// }`;

// // We got parseData holding the information in javascript object. The .parse() method is to convert any JSON string to JS object.

// const parsedValue = JSON.parse(data);
// console.log(parsedValue.bpi.USD.symbol);

// // the above, will print &#36, the above method directly converts the JSON structure to code, only if passed as a string.

// // To reverse it to a JSON string, we have another method called stringify.

// const reverse = JSON.stringify(parsedValue);

// console.log(reverse);

// // Output : 
// /*{
//     "time": {
//         "updated": "Aug 22, 2024 23:28:42 UTC",
//         "updatedISO": "2024-08-22T23:28:42+00:00",
//         "updateduk": "Aug 23, 2024 at 00:28 BST"
//     },
//     "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
//     "chartName": "Bitcoin",
//     "bpi": {
//         "USD": {
//             "code": "USD",
//             "symbol": "&#36;",
//             "rate": "60,447.491",
//             "description": "United States Dollar",
//             "rate_float": 60447.4905
//         },
//         "GBP": {
//             "code": "GBP",
//             "symbol": "&pound;",
//             "rate": "46,168.343",
//             "description": "British Pound Sterling",
//             "rate_float": 46168.3425
//         },
//         "EUR": {
//             "code": "EUR",
//             "symbol": "&euro;",
//             "rate": "54,390.289",
//             "description": "Euro",
//             "rate_float": 54390.2893
//         }
//     }
// }*/