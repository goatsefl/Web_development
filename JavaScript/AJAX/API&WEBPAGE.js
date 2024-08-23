// We're going to use an api testing platform called Hoppscotch to test API requests, also, by testing own API's too. 



// We can use the browser to do the same, stuff but, in Hoppscotch the details about the execution status & headers are displayed.


// Example: catfact.ninja/fact. It will display a JSON file, but, the curation is not present with status and headers.
// With HOPPSCOTCH we can get all the required details in one place, also, catfact is an api.


// On HTTP requests, we can use different verbs, these verbs define types of request that a user can send.

/*
VERBS :

GET: Retrieves data from a specified resource.
POST: Sends data to a server to create or update a resource.
PUT: Replaces the current representation of a resource with a new one.
PATCH: Applies partial updates to a resource.
DELETE: Removes a resource.
HEAD: Sends a request similar to GET, but without the response body.
OPTIONS: Returns the allowed HTTP methods for a resource.
CONNECT: Establishes a tunnel to a server.
TRACE: Echoes the request back to the client.


*/


// In any API, documentation is an important piece of info that needs to be viewed to understand the usage of that specific API.


// Status Codes :Status Codes in HTTP are numerical codes that indicate the status of a server's response to a client's request. They provide information about whether the request was successful, failed, or redirected.

// There are five main categories of status codes, each with a range of numbers:

// 1xx Informational: Indicates that the request was received and is being processed.
// 100 Continue: The server expects the client to continue with the request.
// 101 Switching Protocols: The server is switching protocols.
// 2xx Success: Indicates that the request was successful.
// 200 OK: The request was successful.
// 201 Created: The resource was successfully created.
// 202 Accepted: The request has been accepted for processing.
// ...
// 3xx Redirection: Indicates that the request needs to be redirected to another resource.
// 301 Moved Permanently: The resource has been permanently moved to a new location.
// 302 Found: The resource was found at a different location.
// 304 Not Modified: The resource has not been modified since the last request.
// ...
// 4xx Client Error: Indicates an error on the client's side.
// 400 Bad Request: The server could not understand the request.
// 401 Unauthorized: The client is not authorized to access the resource.
// 403 Forbidden: The client is forbidden from accessing the resource.
// 404 Not Found: The requested resource was not found.   
// ...
// 5xx Server Error: Indicates an error on the server's side.
// 500 Internal Server Error: A generic server error occurred.
// 501 Not Implemented: The server does not support the requested feature.
// 502 Bad Gateway: The server received an invalid response from an upstream server.   






// Query Strings : 

// Used for passing parameters using API endpoint through URL

// syntax ? => start , key:value[appending more key:values can be chained by using &]

