// requires net

const net = require("net");

// requires IP and PORT numbers as constants from constants.js

const { IP, PORT } = require("./constants");

// creates setupInput which assigns buttons to functions within the game, ie quit game, move up, move down

let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === "p") {
    connection.write('Say: wats up')
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  const stdout = process.stdout;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;