// requires net

const net = require("net");

// requires connect function from client.js sheet

let connect = require('./client.js');

// requires setupInput function

let setupInput = require('./input.js');

// tells client that they are connecting to server

console.log("Connecting ...");

// calls setupInput function defined in input.js

//

let conn = connect();
setupInput(conn);