const http = require('http');
const index = require('./index');

// const server = http.createServer((request,response) => {
//     response.end('Helloooooo')
// });

const server = http.createServer(index);

server.listen(3000,'localhost',() =>  console.log('Server started'));