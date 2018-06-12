const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const arr = data.toString().trim().split(' ');
  const cmd = arr[0];
  const args = arr.slice(1);


  if (cmd === 'pwd') pwd();
  if (cmd === 'ls') ls();
  if (cmd === 'cat') cat(args[0]);
  //process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');

});
