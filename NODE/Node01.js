var fs = require('fs'); 

process.argv.forEach((val,index) => {
   if(index == 2){
      dir = `${val}`;
   }
})

const http = require('http');
const server = http.createServer(function(req,res){
   fs.readdir('./'+`${dir}`,function(error,files){
      files.forEach((val)=>{
         res.write(`${val}\n`);
      });
      res.end();
   });
});
server.listen(3000);