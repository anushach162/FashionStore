/*
* Primary file of the application
*/

//Dependencies
const http = require('http');

//Importing the application
const index = require('./index');

//Instantiating the server
const server = http.createServer(index);

//Server listening on port 3000
server.listen(3000,'localhost',() =>  console.log('Server started'));