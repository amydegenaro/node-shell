const fs = require('fs');

module.exports = function(fileName){
  fs.readFile(`./${fileName}`, (error,data)=>{
      if (error) throw "error";
      else{
        process.stdout.write(data);
      }
      process.stdout.write('\nprompt > ');
  })


}
