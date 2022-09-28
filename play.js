// requires connect function from client.js sheet

let connect = require('./client.js')

//requires net

const net = require("net")

// tells client that they are connecting to server

console.log("Connecting ...");

//runs connect function, required from client.js (see client.js for function)

connect();