// Headers are used to provide information about request/response over the network, usage is to fetching data from servers using API's.
// They are key value pairs that provide additional information about the request or response.

// Some API's request Headers for authentication or access of certain data.

// Understanding headers might be of a good advantage.

// We can explore header data about the website in browser->inspect->switch to network tab-> scroll down to locate name-> click any name to see request/response headers and the information provided.


// We require this that some API's may ask the user to get header or headers to provide information.

// Example : icanhazdadjoke.com : icanhazdadjoke.com can be used as an API for fetching a random joke, a specific joke, or searching for jokes in a variety of formats.

// Simply using icanhazdadjoke.com/api won't be able to fetch a joke in browser. The response format is provided by the website itself.

// In our case the "icanhazdadjoke.com/api" is requesting a format to be followed so that it can provide the right information you require.

/* 
To follow the format we cannot use "icanhazdadjoke.com/api/Accept" instead we use API testing platform like Hoppscotch.com
Navigate to headers and type under Header List "Accept" and we can accept any type of provided data following the documentation present in icanhazdadjoke.com/api.
The value should correspond to the user's requirement.
// Type of data to choose from given value :
text/html - HTML response (default response format)
application/json - JSON response
text/plain - Plain text response

The above text/html will be provided if the value is text/html, the "Accept" keyword needs to be present on the "Headers List" while using this value.

There's an addition information provided regarding, default response format. So, even if use nothing, by default it will return HTML/text.

Typing application/json will respond with json object.

The key takeaway here is, that whatever is used, every web-api's key:value might differ.

This distinction allows developers to access in particularly unique ways.
*/
