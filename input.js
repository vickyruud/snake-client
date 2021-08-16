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
  })
  
  return stdin;
}
setupInput();

const handleUserInput = ('data', (key) => {
  if(key === '\u0003'){
  process.exit();
  }
  if(key === 'w'){
    connection.write('Move: up');
  }
  if(key === 's'){
    connection.write('Move: down');
  }
  if(key === 'a'){
    connection.write('Move: left');
  }
  if(key === 'd'){
    connection.write('Move: right');
  }
  if(key === '1'){
    connection.write('Say: Jim');
  }
  if(key === '2'){
    connection.write('Say: Milo');
  }
});

module.exports = setupInput;