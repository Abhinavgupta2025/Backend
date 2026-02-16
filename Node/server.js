const http = require('http');
const server = http.createServer((req,res)=>{
       if(req.url==="/"){
         res.end("Hello Abhinav Gupta");
       }
       else if(req.url==="/contact"){
         res.end("This is our contact page");
       }
});
server.listen(4000,()=>{
    console.log("I am listeneing at port number 4000");
})



