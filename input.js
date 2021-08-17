const { upkey, downkey, rightkey, leftkey } = require("./constants");

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  
  return stdin;
};
setupInput();

//setting up a function to handle user input.
const handleUserInput = ('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for playing the Snake game!");
    process.exit();
  }
  if (key === 'w') {
    connection.write(upkey);
  }
  if (key === 's') {
    connection.write(downkey);
  }
  if (key === 'a') {
    connection.write(leftkey);
  }
  if (key === 'd') {
    connection.write(rightkey);
  }
  if (key === '1') {
    connection.write('Say: Jim');
  }
  if (key === '2') {
    connection.write('Say: Milo');
  }
});

module.exports = setupInput;