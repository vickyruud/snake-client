//requiring the necessary files to call specific variables or fucntions
const net = require('net');
const {IP, PORT} = require('./constants');

// creating the function connect to connect to the server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('connect', () => {
    console.log("Connection to server established!");
  });
  conn.on('connect', () => {
    conn.write("Name: AK"); // name of the snake
  });
  
  
  //interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', () => {
    console.log('You ded cus you idled!'); // message when you are booted from the server for being idle.
  });
  return conn;
};

module.exports = connect;