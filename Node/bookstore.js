const express = require("express");
const app = express();
const bookStore = [
    {id: 1,Name: "Harry Potter",Author: "Karan Rajak" },
    {id: 2,Name: "David Laid",Author: "Karan Rajak" },
    {id: 3,Name: "HP",Author: "Karan Rajak" },
    {id: 4,Name: "Ch",Author: "Karan Rajak" },
    {id: 5,Name: "CCma",Author: "Karan Rajak" },
]
app.use(express.json());
app.get("/book",(req,res)=>{
        res.send(bookStore);
})
app.get("/book/:id",(req,res)=>{
        const id = parseInt(req.params.id);
        const book =  bookStore.find(info=>info.id==id);
         res.send(book);
})
app.listen(4000,(req,res)=>{
        console.log("Listening at 4000");
})
app.post("/book",(req,res)=>{
     bookStore.push(req.body);
     console.log("Data saved SUccessfully");
})
app.delete("/book/:id",(req,res)=>{
        const id = parseInt (req.params.id);
        const index =  bookStore.findIndex(info=>info.id==id);
        bookStore.splice(index,1);
        res.send("Deleted Successfully");
})

