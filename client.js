// requires net

const net = require("net");

// establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // sends a connection established message as a confirmation to client once connection is established.

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write("Name: STU");
  })

  //Sends the three letter name of our snake to the game server

  conn.on("data", (data) => {
    console.log("server says: ", data);
  });

  // interprets incoming data as text

  conn.setEncoding("utf8");

  // returns conn

  return conn;
};

// exports the connect function above so other sheets can require it

module.exports = connect;