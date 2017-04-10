/*
Instructions (20 Minutes)
Using the previous example as a guide, create an app that has two web servers.
One that listens on port 7000 and one that listens on port 7500.
The one listening on port 7000 will always tell the user something good about themselves.
The one listening on 7500 will always tell the user something bad about themselves.
Make sure you create a Github repo and commit this code!
Bonus
Look for other ways to expand what your server can do. As possibilities:
Generate the good/bad phrase randomly from a list of predefined phrases
Use the twitter package inside the response to also return a random tweet
*/

const http = require('http');

//Good port
const PORT1 = 7000;
//Bad port
const PORT2 = 7500;

function handleRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT);

});
