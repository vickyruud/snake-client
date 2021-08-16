const net = require('net');
const {IP, PORT} = require('./constants'); 

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('connect', () => {
    console.log("Connection to server established!");
  })
  conn.on('connect', () => {
    conn.write("Name: CAS");
  })
  
  
  //interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('You ded cus you idled!')
  })
  return conn
};

module.exports = connect;